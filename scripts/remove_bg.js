import sharp from 'sharp';
import path from 'path';

async function processLogo() {
  const inputPath = path.resolve('src/assets/logo.jpg');
  const outputPath = path.resolve('src/assets/logo.png');

  console.log('Processing:', inputPath);

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Convert black background to transparent
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Check if pixel is dark/black
    if (r < 30 && g < 30 && b < 30) {
      data[i + 3] = 0; // Alpha = 0 (transparent)
    } else {
      const brightness = Math.max(r, g, b);
      if (brightness < 60) {
        // Feather edge
        data[i + 3] = Math.round(((brightness - 30) / 30) * 255);
      }
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);

  console.log('Saved transparent logo cutout to:', outputPath);
}

processLogo().catch(console.error);
