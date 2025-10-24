const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 이미지 디렉토리 경로 설정
const assetDir = path.join(__dirname, 'src/assets');
const outputDir = path.join(__dirname, 'src/assets/optimized');

// 출력 디렉토리가 없으면 생성
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 이미지 파일 확장자
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

// 이미지 최적화 함수
async function optimizeImage(inputPath, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, ext);
  
  console.log(`\nProcessing: ${fileName}`);
  
  try {
    // 원본 이미지 정보 가져오기
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original: ${metadata.width}x${metadata.height}, ${metadata.format}, ${(fs.statSync(inputPath).size / 1024).toFixed(2)}KB`);
    
    // 최대 너비 설정 (너무 큰 이미지 리사이징)
    const maxWidth = 1200;
    const resizeOptions = metadata.width > maxWidth ? { width: maxWidth } : undefined;
    
    // JPG로 최적화
    const jpgOutputPath = path.join(outputDir, `${baseName}.jpg`);
    await sharp(inputPath)
      .resize(resizeOptions)
      .jpeg({ quality: 70, mozjpeg: true })
      .toFile(jpgOutputPath);
    
    // WebP로 변환
    const webpOutputPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(inputPath)
      .resize(resizeOptions)
      .webp({ quality: 65 })
      .toFile(webpOutputPath);
    
    // 최적화된 이미지 정보 출력
    const jpgStats = fs.statSync(jpgOutputPath);
    const webpStats = fs.statSync(webpOutputPath);
    const jpgSize = (jpgStats.size / 1024).toFixed(2);
    const webpSize = (webpStats.size / 1024).toFixed(2);
    const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(2);
    
    console.log(`Optimized JPG: ${jpgSize}KB (${(100 - (jpgStats.size / fs.statSync(inputPath).size * 100)).toFixed(2)}% reduction)`);
    console.log(`WebP: ${webpSize}KB (${(100 - (webpStats.size / fs.statSync(inputPath).size * 100)).toFixed(2)}% reduction)`);
    
    return {
      original: { path: inputPath, size: originalSize },
      jpg: { path: jpgOutputPath, size: jpgSize },
      webp: { path: webpOutputPath, size: webpSize }
    };
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error);
  }
}

// 이미지 파일 찾기 및 최적화
async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  const results = [];
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 하위 디렉토리 처리 (재귀 호출)
      const subResults = await processDirectory(filePath);
      results.push(...subResults);
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      // 이미지 파일 최적화
      const result = await optimizeImage(filePath, file);
      if (result) results.push(result);
    }
  }
  
  return results;
}

// 이미지 Helper 파일 생성
function generateImagesHelper(results) {
  let content = `// 이 파일은 자동 생성되었습니다. - 이미지 최적화 스크립트\n\n`;
  
  results.forEach(result => {
    const baseName = path.basename(result.original.path).split('.')[0];
    const originalPath = result.original.path.replace(__dirname, '').replace(/\\/g, '/');
    const jpgPath = result.jpg.path.replace(__dirname, '').replace(/\\/g, '/');
    const webpPath = result.webp.path.replace(__dirname, '').replace(/\\/g, '/');
    
    content += `// ${baseName}: Original(${result.original.size}KB) -> JPG(${result.jpg.size}KB), WebP(${result.webp.size}KB)\n`;
    content += `export const ${baseName}Image = {\n`;
    content += `  original: '${originalPath}',\n`;
    content += `  jpg: '${jpgPath}',\n`;
    content += `  webp: '${webpPath}'\n`;
    content += `};\n\n`;
  });
  
  // 간단한 사용법 설명 추가
  content += `/*
사용 예시:

<template>
  <picture>
    <source :srcset="sanfran1Image.webp" type="image/webp">
    <img :src="sanfran1Image.jpg" alt="San Francisco">
  </picture>
</template>

<script>
import { sanfran1Image } from '@/assets/optimized/images';

export default {
  setup() {
    return { sanfran1Image };
  }
}
</script>
*/`;
  
  fs.writeFileSync(path.join(outputDir, 'images.js'), content);
  console.log(`\nCreated images helper file at: ${path.join(outputDir, 'images.js')}`);
}

// 메인 함수
async function main() {
  console.log('Starting image optimization...');
  
  try {
    const results = await processDirectory(assetDir);
    
    // 결과 요약
    console.log('\n--- OPTIMIZATION SUMMARY ---');
    console.log(`Total images processed: ${results.length}`);
    
    if (results.length > 0) {
      // 최적화 결과 합계 계산
      const totalOriginalSize = results.reduce((sum, r) => sum + parseFloat(r.original.size), 0);
      const totalJpgSize = results.reduce((sum, r) => sum + parseFloat(r.jpg.size), 0);
      const totalWebpSize = results.reduce((sum, r) => sum + parseFloat(r.webp.size), 0);
      
      console.log(`Total original size: ${totalOriginalSize.toFixed(2)}KB`);
      console.log(`Total JPG size: ${totalJpgSize.toFixed(2)}KB (${(100 - (totalJpgSize / totalOriginalSize * 100)).toFixed(2)}% reduction)`);
      console.log(`Total WebP size: ${totalWebpSize.toFixed(2)}KB (${(100 - (totalWebpSize / totalOriginalSize * 100)).toFixed(2)}% reduction)`);
      
      // 이미지 헬퍼 파일 생성
      generateImagesHelper(results);
    }
    
    console.log('\nImage optimization completed!');
    console.log('Optimized images are saved in the "src/assets/optimized" directory.');
    console.log('You can now use these images in your project for better performance.');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

// 스크립트 실행
main();
