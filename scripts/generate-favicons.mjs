import sharp from 'sharp';
import fs from 'fs';

const userUpload = 'C:/Users/praja/.gemini/antigravity-ide/brain/3c6bdf2e-c1ca-4fa0-b696-3c4564c2f826/.user_uploaded/media_1790318257396.jpg';

async function main() {
  console.log('Generating favicons...');

  fs.copyFileSync(userUpload, 'public/favicon.jpg');
  fs.copyFileSync(userUpload, 'public/logo.jpg');
  fs.copyFileSync(userUpload, 'src/assets/logo.jpg');

  const square512 = await sharp(userUpload)
    .trim()
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync('public/favicon.png', square512);

  await sharp(square512).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(square512).resize(32, 32).png().toFile('public/favicon-32x32.png');
  await sharp(square512).resize(16, 16).png().toFile('public/favicon-16x16.png');

  const png48 = await sharp(square512).resize(48, 48).png().toBuffer();
  const png32 = await sharp(square512).resize(32, 32).png().toBuffer();
  const png16 = await sharp(square512).resize(16, 16).png().toBuffer();

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(3, 4);

  const images = [
    { size: 16, buffer: png16 },
    { size: 32, buffer: png32 },
    { size: 48, buffer: png48 }
  ];

  const dirEntries = [];
  let currentOffset = 6 + 3 * 16;

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.size >= 256 ? 0 : img.size, 0);
    entry.writeUInt8(img.size >= 256 ? 0 : img.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    dirEntries.push(entry);
    currentOffset += img.buffer.length;
  }

  const parts = [header];
  for (const d of dirEntries) parts.push(d);
  for (const img of images) parts.push(img.buffer);
  const icoBuffer = Buffer.concat(parts);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  const base64Png = square512.toString('base64');
  const svgContent = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><rect width="512" height="512" fill="#ffffff" rx="64"/><image href="data:image/png;base64,' + base64Png + '" width="512" height="512"/></svg>';
  fs.writeFileSync('public/favicon.svg', svgContent);

  console.log('ALL FAVICONS GENERATED SUCCESSFULLY!');
}

main().catch(console.error);
