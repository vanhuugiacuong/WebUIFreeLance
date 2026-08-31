import sharp from "sharp";
import fs from "fs";
import path from "path";

const input = "design-assets/31.png";
const outputDir = "public/images/mua-hang";
const outputFile = path.join(outputDir, "quote-bg.webp");

const img = sharp(input);
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const W = info.width;
const H = info.height;
const C = info.channels;

// Find the bounding box of the amber glass texture (where color is not pure solid orange #ea4b27 / #eb4c24)
// Solid orange is R ~ 235, G ~ 75, B ~ 38
let minX = W, maxX = 0, minY = H, maxY = 0;

for (let y = 0; y < H; y += 4) {
  for (let x = 0; x < W; x += 4) {
    const idx = (y * W + x) * C;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];

    if (a < 50) continue;

    // Check if this pixel is distinct from the solid orange background
    // Orange is roughly (235, 76, 39). Amber texture has golden yellow / dark amber variations.
    const isSolidOrange = (r > 220 && r < 245) && (g > 65 && g < 90) && (b > 25 && b < 50);
    if (!isSolidOrange) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log(`Amber texture detected bounding box: x=${minX}..${maxX} (w=${maxX - minX}), y=${minY}..${maxY} (h=${maxY - minY})`);

// Crop the amber texture bounding box
const width = maxX - minX;
const height = maxY - minY;

await sharp(input)
  .extract({ left: minX, top: minY, width, height })
  .resize(2560, null, { withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile(outputFile);

console.log("Successfully extracted amber texture and exported to public/images/mua-hang/quote-bg.webp");
