import sharp from 'sharp';

async function cleanLogo() {
  const inputPath = 'src/assets/logo1.jpeg';
  
  // First load image metadata
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log('Original image dimensions:', metadata.width, metadata.height);

  // The top ~8% has a grey border line. Let's extract only the actual logo contents:
  // Let's crop away top 10% and bottom 8%, left 5%, right 5%
  // Or extract exact bounding box
  const topCrop = Math.round(metadata.height * 0.10); // Skip the top line completely
  const bottomCrop = Math.round(metadata.height * 0.06);
  const leftCrop = Math.round(metadata.width * 0.06);
  const rightCrop = Math.round(metadata.width * 0.06);

  const cropWidth = metadata.width - leftCrop - rightCrop;
  const cropHeight = metadata.height - topCrop - bottomCrop;

  const croppedBuffer = await image
    .extract({
      left: leftCrop,
      top: topCrop,
      width: cropWidth,
      height: cropHeight
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = croppedBuffer;
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

    // Background threshold (off-white / light grey)
    if (minVal > 185 && maxDiff < 30) {
      alpha = 0;
    } else if (minVal > 165 && maxDiff < 25) {
      const t = (minVal - 165) / 20;
      alpha = Math.max(0, Math.min(255, Math.round(255 * (1 - t))));
    }

    // Light Theme Logo (Original Navy & Gold, 100% transparent bg)
    lightBuf[i] = r;
    lightBuf[i + 1] = g;
    lightBuf[i + 2] = b;
    lightBuf[i + 3] = alpha;

    // Dark Theme Logo (Convert Navy text/shapes to White, keep Gold, 100% transparent bg)
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

  // Trim transparent edges tightly around the artwork
  await sharp(lightBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/logo-transparent.png');

  await sharp(lightBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('public/logo-transparent.png');

  await sharp(darkBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/logo-dark-theme.png');

  await sharp(darkBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('public/logo-dark-theme.png');

  console.log('Cleaned and trimmed logo without top dash line successfully!');
}

cleanLogo().catch(console.error);
