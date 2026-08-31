import sharp from 'sharp';
import { mkdir, writeFile, readFile } from 'node:fs/promises';

const MAP = {
  '145:342': 'hero-bg',            '145:460': 'hero-chai',
  '145:345': 'logo-header',        '145:427': 'logo-footer',
  '145:356': 'pattern-cam',
  '145:359': 'about-illustration',
  '145:457': 'dong-tien-nua',      '145:466': 'dong-tien-tron',
  '145:456': 'product-web49',
  '145:448': 'gia-tri-nong-am',    '145:450': 'gia-tri-ban-dia',  '145:449': 'gia-tri-hien-dai',
  '145:459': 'nguyen-lieu',
  '145:440': 'visit-bg',           '145:441': 'visit-store',      '145:445': 'visit-side',
};

const OUT = 'D:/Repos/CODE/public/images';
await mkdir(OUT, { recursive: true });
const { images } = JSON.parse(await readFile(process.argv[2], 'utf8'));

let totalPng = 0, totalWebp = 0;
const rows = [];
await Promise.all(Object.entries(images).map(async ([id, url]) => {
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  const name = MAP[id];
  const img = sharp(buf);
  const { width, height } = await img.metadata();
  const webp = await img.webp({ quality: 82, effort: 5 }).toBuffer();
  await writeFile(`${OUT}/${name}.webp`, webp);
  totalPng += buf.length; totalWebp += webp.length;
  rows.push([name, `${width}x${height}`, (buf.length/1024).toFixed(0), (webp.length/1024).toFixed(0)]);
}));

rows.sort((a,b) => a[0].localeCompare(b[0]));
console.log('ten'.padEnd(22) + 'kich thuoc'.padEnd(13) + 'PNG'.padStart(8) + 'WebP'.padStart(9));
console.log('-'.repeat(52));
rows.forEach(r => console.log(r[0].padEnd(22) + r[1].padEnd(13) + (r[2]+'K').padStart(8) + (r[3]+'K').padStart(9)));
console.log('-'.repeat(52));
console.log('TONG'.padEnd(35) + (Math.round(totalPng/1024)+'K').padStart(8) + (Math.round(totalWebp/1024)+'K').padStart(9));
