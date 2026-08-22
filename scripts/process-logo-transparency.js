import sharp from 'sharp';
import fs from 'fs';

async function processLogo() {
  const inputPath = 'src/assets/logo1.jpeg';
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 (RGBA)

  // Buffer for standard transparent logo (for light background)
  const lightLogoBuf = Buffer.alloc(data.length);
  // Buffer for white/gold logo (for dark background footer)
  const darkLogoBuf = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Background color detection: off-white/light grey (~220-245)
    // Blue parts: r < 70, g < 90, b > 90
    // Gold parts: r > 180, g > 140, b < 100
    // Check if pixel is background:
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    
    let alpha = 255;
    
    // If pixel is near grey/off-white (background)
    if (minVal > 195 && maxDiff < 28) {
      alpha = 0;
    } else if (minVal > 175 && maxDiff < 24) {
      // Soft edge smoothing
      const t = (minVal - 175) / 20;
      alpha = Math.max(0, Math.min(255, Math.round(255 * (1 - t))));
    }

    // Light Theme Logo (Original Colors + Alpha Transparency)
    lightLogoBuf[i] = r;
    lightLogoBuf[i + 1] = g;
    lightLogoBuf[i + 2] = b;
    lightLogoBuf[i + 3] = alpha;

    // Dark Theme Logo (Convert Navy text/shapes to White, keep Gold, keep Alpha)
    // If it's blue/navy: r < 100, g < 120, b > 100 or dark blue/grey
    const isBlueNavy = (b > r + 20 && b > g) || (r < 60 && g < 80 && b < 140);
    if (isBlueNavy && alpha > 0) {
      // Convert navy to bright white / silver
      darkLogoBuf[i] = 255;
      darkLogoBuf[i + 1] = 255;
      darkLogoBuf[i + 2] = 255;
      darkLogoBuf[i + 3] = alpha;
    } else {
      // Keep gold and other accents
      darkLogoBuf[i] = r;
      darkLogoBuf[i + 1] = g;
      darkLogoBuf[i + 2] = b;
      darkLogoBuf[i + 3] = alpha;
    }
  }

  // Save light transparent logo
  await sharp(lightLogoBuf, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/logo-transparent.png');
  
  await sharp(lightLogoBuf, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile('public/logo-transparent.png');

  // Save dark transparent logo (White + Gold)
  await sharp(darkLogoBuf, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/logo-dark-theme.png');

  await sharp(darkLogoBuf, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile('public/logo-dark-theme.png');

  console.log('Successfully generated transparent logos for light and dark backgrounds!');
}

processLogo().catch(console.error);
