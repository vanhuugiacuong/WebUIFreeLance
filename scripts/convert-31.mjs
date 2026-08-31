import sharp from "sharp";
import fs from "fs";
import path from "path";

const input = "design-assets/31.png";
const outputDir = "public/images/mua-hang";
const outputFile = path.join(outputDir, "quote-bg.webp");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Trim transparent padding around the artwork in Canva export
const trimmed = await sharp(input).trim().toBuffer();

await sharp(trimmed)
  .resize(2560, null, { withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile(outputFile);

const meta = await sharp(outputFile).metadata();
console.log(`Successfully trimmed & converted 31.png to quote-bg.webp (${meta.width}x${meta.height})`);
