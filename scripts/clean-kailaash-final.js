import sharp from 'sharp';

async function cleanKailaashFinal() {
  const inputPath = 'src/assets/logo1.jpeg';
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Let's crop from y = 0.58 * height to 0.98 * height
  const topCrop = Math.round(metadata.height * 0.58);
  const leftCrop = Math.round(metadata.width * 0.05);
  const width = Math.round(metadata.width * 0.90);
  const height = Math.round(metadata.height * 0.38);

  const { data, info } = await image
    .extract({ left: leftCrop, top: topCrop, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const rawBuf = Buffer.from(data);

  // Look at the image: in rawBuf, let's see where the swoosh marks are:
  // In the top 80 pixels (y < 80):
  // The capital 'K' is on the left (x from 0 to 180).
  // The 'l' is around x ≈ 400-440.
  // The 'h' is around x ≈ 880-940.
  // The swoosh marks are in the region:
  // - between x = 185 and x = 395 (above 'ai')
  // - between x = 445 and x = 875 (above 'aas')
  // For any y < 65, EVERYTHING across the entire width is above the word 'Kailaash'!
  // For y between 65 and 95, in the region x > 185 and x < 395 (above 'a' and 'i'), wipe it out completely!
  // For y between 65 and 95, in the region x > 445 and x < 875 (above 'a', 'a', 's'), wipe it out completely!

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;

      // Rule 1: Wipe everything in the top 65 pixels across entire width
      if (y < 68) {
        rawBuf[idx] = 240;
        rawBuf[idx + 1] = 240;
        rawBuf[idx + 2] = 240;
        rawBuf[idx + 3] = 0;
      }
      // Rule 2: Wipe swoosh above 'ai' (between K and l) for y < 100
      else if (y < 95 && x >= 170 && x <= 410) {
        // preserve the dot of i if it's below y = 85
        if (y < 82) {
          rawBuf[idx] = 240;
          rawBuf[idx + 1] = 240;
          rawBuf[idx + 2] = 240;
          rawBuf[idx + 3] = 0;
        }
      }
      // Rule 3: Wipe swoosh above 'aas' (between l and h) for y < 100
      else if (y < 95 && x >= 445 && x <= 870) {
        rawBuf[idx] = 240;
        rawBuf[idx + 1] = 240;
        rawBuf[idx + 2] = 240;
        rawBuf[idx + 3] = 0;
      }
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

  console.log('Kailaash text is 100% clean with ZERO marks above!');
}

cleanKailaashFinal().catch(console.error);
