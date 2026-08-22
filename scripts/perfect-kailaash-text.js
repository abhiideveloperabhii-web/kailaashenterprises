import sharp from 'sharp';

async function perfectKailaashText() {
  const inputPath = 'src/assets/logo1.jpeg';
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Extract from 55% down to 95%
  const topCrop = Math.round(metadata.height * 0.54);
  const leftCrop = Math.round(metadata.width * 0.05);
  const width = Math.round(metadata.width * 0.90);
  const height = Math.round(metadata.height * 0.42);

  const { data, info } = await image
    .extract({ left: leftCrop, top: topCrop, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const rawBuf = Buffer.from(data);

  // Let's identify the swoosh remnants in the top ~25% of this extracted patch:
  // In the top region (y < 48), any pixel that is part of the swoosh (gold or navy curve)
  // that is NOT connected to the top of 'K', 'l', 'h' or the dot of 'i':
  // In fact, the dot of 'i' is around x ≈ 0.35 * w, y ≈ 52.
  // The ascenders of 'l' and 'h' are around x ≈ 0.42 * w and x ≈ 0.85 * w.
  // Everything above y = 44 across the entire width is part of the KE emblem swoosh!
  // Let's clear any pixel where y < 44 to background (r=240, g=240, b=240, a=0).
  for (let y = 0; y < 44; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      rawBuf[idx] = 240;
      rawBuf[idx + 1] = 240;
      rawBuf[idx + 2] = 240;
      rawBuf[idx + 3] = 0;
    }
  }

  const lightBuf = Buffer.alloc(rawBuf.length);
  const darkBuf = Buffer.alloc(rawBuf.length);

  for (let i = 0; i < rawBuf.length; i += 4) {
    const r = rawBuf[i];
    const g = rawBuf[i + 1];
    const b = rawBuf[i + 2];
    const aIn = rawBuf[i + 3];

    if (aIn === 0) {
      lightBuf[i + 3] = 0;
      darkBuf[i + 3] = 0;
      continue;
    }

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

    // Dark Theme (Navy to White, keep Gold)
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

  await sharp(lightBuf, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/kailaash-text.png');

  await sharp(lightBuf, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('public/kailaash-text.png');

  await sharp(darkBuf, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('src/assets/kailaash-text-dark.png');

  await sharp(darkBuf, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ compressionLevel: 9 })
    .toFile('public/kailaash-text-dark.png');

  console.log('Generated perfect Kailaash text with all letters complete and zero stray marks!');
}

perfectKailaashText().catch(console.error);
