// 빌드 전에 실행: 티스토리 블로그 RSS에서 최신 글 목록을 받아
// src/data/blogPosts.json 에 저장한다(홈 "최신 칼럼" 섹션과 정적 본문에 사용).
// 네트워크 오류·형식 오류 시에는 기존 파일을 그대로 두고 빌드를 계속한다.

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const FEED_URL = 'https://berkeleytax.tistory.com/rss';
const MAX_POSTS = 12;
const outFile = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'blogPosts.json');

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", middot: '·', nbsp: ' ' };
function decode(text) {
  let out = String(text || '').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  // &amp;middot; 처럼 이중 인코딩된 경우까지 풀기 위해 두 번 적용
  for (let i = 0; i < 2; i += 1) {
    out = out
      .replace(/&#(\d+);/g, (_m, n) => String.fromCodePoint(Number(n)))
      .replace(/&#x([0-9a-f]+);/gi, (_m, n) => String.fromCodePoint(parseInt(n, 16)))
      .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name.toLowerCase()] ?? m);
  }
  return out.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function tag(xml, name) {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : '';
}

function parse(xml) {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  return items
    .map((item) => {
      const link = tag(item, 'link');
      const date = new Date(tag(item, 'pubDate'));
      return {
        title: tag(item, 'title'),
        link,
        date: Number.isNaN(date.getTime()) ? '' : date.toISOString(),
        category: tag(item, 'category'), // 첫 번째 category = 블로그 카테고리
      };
    })
    .filter((p) => p.title && /^https:\/\/berkeleytax\.tistory\.com\/\d+$/.test(p.link))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, MAX_POSTS);
}

try {
  const res = await fetch(FEED_URL, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const posts = parse(await res.text());
  if (!posts.length) throw new Error('no posts parsed');

  let previous = '';
  try { previous = JSON.stringify(JSON.parse(readFileSync(outFile, 'utf8')).posts); } catch { /* 첫 실행 */ }
  if (previous === JSON.stringify(posts)) {
    console.log(`[fetch-blog-posts] up to date (${posts.length} posts)`);
  } else {
    writeFileSync(outFile, JSON.stringify({ source: FEED_URL, posts }, null, 2) + '\n', 'utf8');
    console.log(`[fetch-blog-posts] ${posts.length} posts written`);
  }
} catch (err) {
  console.warn(`[fetch-blog-posts] skipped (${err.message}) — keeping existing blogPosts.json`);
}
