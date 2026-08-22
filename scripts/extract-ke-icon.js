import sharp from 'sharp';

async function extractKeIcon() {
  const inputPath = 'src/assets/logo1.jpeg';
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Crop specifically to the top KE monogram (avoiding the text below and border above)
  const topCrop = Math.round(metadata.height * 0.10);
  const leftCrop = Math.round(metadata.width * 0.12);
  const width = Math.round(metadata.width * 0.76);
  const height = Math.round(metadata.height * 0.50); // Only the KE emblem

  const { data, info } = await image
    .extract({ left: leftCrop, top: topCrop, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const lightBuf = Buffer.alloc(data.length);
  const darkBuf = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const minVal = Math.min(r, g, b);
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

    let alpha = 255;
    if (minVal > 185 && maxDiff < 30) {
      alpha = 0;
    } else if (minVal > 165 && maxDiff < 25) {
      const t = (minVal - 165) / 20;
      alpha = Math.max(0, Math.min(255, Math.round(255 * (1 - t))));
    }

    // Light Theme
    lightBuf[i] = r;
    lightBuf[i + 1] = g;
    lightBuf[i + 2] = b;
    lightBuf[i + 3] = alpha;

    // Dark Theme (Convert Navy to White, keep Gold)
    const isBlueNavy = (b > r + 15 && b > g) || (r < 70 && g < 90 && b < 150);
    if (isBlueNavy && alpha > 0) {
      darkBuf[i] = 255;
      darkBuf[i + 1] = 255;
      darkBuf[i + 2] = 255;
      darkBuf[i + 3] = alpha;
    } else {
      darkBuf[i] = r;
      darkBuf[i + 1] = g;
      darkBuf[i + 2] = b;
      darkBuf[i + 3] = alpha;
    }
  }

  await sharp(lightBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/ke-icon.png');

  await sharp(lightBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('public/ke-icon.png');

  await sharp(darkBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/ke-icon-dark.png');

  await sharp(darkBuf, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('public/ke-icon-dark.png');

  console.log('KE icon extracted successfully with 100% transparency!');
}

extractKeIcon().catch(console.error);
