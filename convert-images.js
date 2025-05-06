import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 이미지가 있는 디렉토리 경로
const imageDir = path.resolve('./src/assets');

// 결과물을 저장할 디렉토리 경로
const outputDir = path.resolve('./src/assets/optimized');

// 출력 디렉토리가 없으면 생성
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// JPG 파일 목록 가져오기
const jpgFiles = fs.readdirSync(imageDir)
  .filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'));

// 각 이미지를 WebP와 AVIF 형식으로 변환
async function convertImages() {
  for (const file of jpgFiles) {
    const filePath = path.join(imageDir, file);
    const fileName = path.parse(file).name;
    
    // WebP로 변환
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${fileName}.webp`));
    
    console.log(`Converted ${file} to WebP`);
    
    // AVIF로 변환 (AVIF는 더 나은 압축을 제공하지만 모든 브라우저에서 지원되지는 않음)
    try {
      await sharp(filePath)
        .avif({ quality: 65 })
        .toFile(path.join(outputDir, `${fileName}.avif`));
      
      console.log(`Converted ${file} to AVIF`);
    } catch (error) {
      console.error(`Failed to convert ${file} to AVIF:`, error);
    }
  }
  
  console.log('All images converted successfully!');
}

convertImages().catch(err => {
  console.error('Error during conversion:', err);
});
