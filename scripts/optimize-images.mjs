// 원본 이미지를 웹에 맞는 해상도로 리사이즈하고 webp/avif를 생성한다.
//
// - 원본은 src/assets/original/ 로 1회 이동 백업(gitignore) → 항상 원본에서 재생성하므로
//   여러 번 실행해도 품질이 누적 저하되지 않는다.
// - 리사이즈된 fallback(jpg/png)은 src/assets/<name> 에 덮어써서 기존 import·CSS url()이
//   그대로 작은 파일을 쓰게 한다.
// - webp/avif 는 src/assets/optimized/ 에 저장(HomeServices의 import.meta.glob이 사용).
// - public/preview-image.jpg(OG 이미지)는 1200x630으로 맞춘다.
//
// 실행: npm run optimize-images   (그 뒤 npm run build)

import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync, copyFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, parse, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir = join(root, 'src', 'assets');
const originalDir = join(assetsDir, 'original');
const optimizedDir = join(assetsDir, 'optimized');
mkdirSync(originalDir, { recursive: true });
mkdirSync(optimizedDir, { recursive: true });

// 이미지별 최대 변(px). 지정 없으면 DEFAULT_MAX.
const DEFAULT_MAX = 1600;
const MAX_EDGE = {
  sanfran1: 1920, // 히어로 풀블리드 배경
  '250220_ceo_pic': 900, // 360px 원형 프로필 (레티나 2.5x)
  Berkeley: 1000, // 로고
  american_flag: 1280, // 프로필 배경
};

// 사진성 PNG는 JPG로 변환한다(투명도 불필요, 용량 큼). <name>.png → <name>.jpg
const FORCE_JPEG = new Set(['sanfranvilla']);

const kb = (n) => Math.round(n / 1024);
const isRaster = (f) => /\.(jpe?g|png)$/i.test(f);

async function processFile(dir, file) {
  const currentPath = join(dir, file);
  const backupPath = join(originalDir, file);
  if (!existsSync(backupPath)) copyFileSync(currentPath, backupPath);

  const { name, ext } = parse(file);
  const forceJpeg = FORCE_JPEG.has(name);
  const isPng = ext.toLowerCase() === '.png' && !forceJpeg;
  const cap = MAX_EDGE[name] ?? DEFAULT_MAX;
  const resize = { width: cap, height: cap, fit: 'inside', withoutEnlargement: true };
  const meta = await sharp(backupPath).metadata();
  const beforeKB = kb(statSync(currentPath).size);

  const fallbackBuf = isPng
    ? await sharp(backupPath).resize(resize).png({ compressionLevel: 9, palette: true, quality: 82 }).toBuffer()
    : await sharp(backupPath).resize(resize).jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  const fallbackPath = forceJpeg ? join(dir, `${name}.jpg`) : currentPath;
  writeFileSync(fallbackPath, fallbackBuf);
  if (forceJpeg && fallbackPath !== currentPath) rmSync(currentPath); // 원본 .png 제거

  await sharp(backupPath).resize(resize).webp({ quality: 72 }).toFile(join(optimizedDir, `${name}.webp`));
  await sharp(backupPath).resize(resize).avif({ quality: 50 }).toFile(join(optimizedDir, `${name}.avif`));

  const w = kb(statSync(join(optimizedDir, `${name}.webp`)).size);
  const a = kb(statSync(join(optimizedDir, `${name}.avif`)).size);
  console.log(
    `  ${file.padEnd(24)} ${String(meta.width)}x${meta.height}  ${beforeKB}KB → ` +
      `jpg/png ${kb(fallbackBuf.length)}KB · webp ${w}KB · avif ${a}KB`
  );
}

console.log('[optimize-images] src/assets');
for (const file of readdirSync(assetsDir)) {
  if (isRaster(file) && statSync(join(assetsDir, file)).isFile()) {
    await processFile(assetsDir, file);
  }
}

// OG 미리보기 이미지: 정확히 1200x630
const og = join(root, 'public', 'preview-image.jpg');
if (existsSync(og)) {
  const ogBackup = join(originalDir, 'preview-image.jpg');
  if (!existsSync(ogBackup)) copyFileSync(og, ogBackup);
  const before = kb(statSync(og).size);
  await sharp(ogBackup)
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(og + '.tmp');
  writeFileSync(og, await sharp(og + '.tmp').toBuffer());
  rmSync(og + '.tmp');
  console.log(`[optimize-images] public/preview-image.jpg  ${before}KB → ${kb(statSync(og).size)}KB (1200x630)`);
}

console.log('[optimize-images] done. Run `npm run build` next.');
