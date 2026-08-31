import sharp from "sharp";
import fs from "fs";
import path from "path";

const input = "design-assets/31.png";
const outputDir = "public/images/mua-hang";
const outputFile = path.join(outputDir, "quote-bg.webp");

// Extract strictly the rich amber glass texture zone (excluding solid orange sidebars)
// x = 950 to 2700 (width = 1750), y = 600 to 2800 (height = 2200)
await sharp(input)
  .extract({ left: 950, top: 600, width: 1750, height: 2200 })
  .resize(2560, null, { withoutEnlargement: true })
  .webp({ quality: 92 })
  .toFile(outputFile);

const meta = await sharp(outputFile).metadata();
console.log(`Successfully extracted pure amber glass texture to quote-bg.webp (${meta.width}x${meta.height})`);
