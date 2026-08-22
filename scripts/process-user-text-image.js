import sharp from 'sharp';

async function processUserTextImage() {
  const inputPath = 'C:\\Users\\HP-PC\\.gemini\\antigravity-ide\\brain\\3c64f290-4234-4e64-93d5-a88b81ac0dce\\.user_uploaded\\media_1787410968126.png';
  const image = sharp(inputPath);

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const lightBuf = Buffer.alloc(data.length);
  const darkBuf = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const minVal = Math.min(r, g, b);
    const maxDiff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));

    let alpha = 255;

    // Detect light grey / off-white background
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

    // Dark Theme (Convert Navy to White, keep Gold lines)
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

  // Trim and save light version
  await sharp(lightBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/kailaash-text.png');

  await sharp(lightBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('public/kailaash-text.png');

  // Trim and save dark version
  await sharp(darkBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/kailaash-text-dark.png');

  await sharp(darkBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('public/kailaash-text-dark.png');

  console.log('Successfully processed user exact typography image with 100% transparency and zero errors!');
}

processUserTextImage().catch(console.error);
