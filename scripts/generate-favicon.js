import sharp from 'sharp';
import fs from 'fs';

async function generateFavicons() {
  const inputIcon = 'src/assets/ke-icon.png';
  
  // 1. Standard Favicon 32x32 PNG
  await sharp(inputIcon)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon-32x32.png');

  // 2. Favicon 48x48 PNG (Standard Browser Tab)
  await sharp(inputIcon)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon.png');

  // 3. Apple Touch Icon 180x180 (iOS Home Screen)
  await sharp(inputIcon)
    .resize(180, 180, { fit: 'contain', background: { r: 250, g: 248, b: 243, alpha: 1 } }) // elegant ivory background for iOS icons
    .png()
    .toFile('public/apple-touch-icon.png');

  // 4. Android Chrome 192x192
  await sharp(inputIcon)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/android-chrome-192x192.png');

  // 5. Android Chrome 512x512 (PWA / Splash)
  await sharp(inputIcon)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/android-chrome-512x512.png');

  // 6. Copy to favicon.ico fallback
  fs.copyFileSync('public/favicon.png', 'public/favicon.ico');

  console.log('Generated all favicon assets successfully!');
}

generateFavicons().catch(console.error);
