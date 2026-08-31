import sharp from 'sharp';

const { data, info } = await sharp('public/images/hero-chai.webp')
  .ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;
const at = (x, y) => { const i = (y * W + x) * C; return [data[i], data[i+1], data[i+2], data[i+3]]; };
// Kem #FBF1E8 (b~232) khac chu trang thuan (b=255)
const laKem = (r,g,b,a) => a > 128 && r > 240 && b > 215 && b < 246 && r - b > 8;

// Cot nao co doan kem lien tuc dai -> thuoc badge (chu chi cho doan ngan)
const runDai = [];
for (let x = 0; x < W; x++) {
  let max = 0, cur = 0;
  for (let y = 0; y < H; y++) { const [r,g,b,a] = at(x,y); if (laKem(r,g,b,a)) { if (++cur > max) max = cur; } else cur = 0; }
  runDai.push(max);
}
const cot = runDai.map((v,i)=>[i,v]).filter(([,v]) => v > 150).map(([i]) => i);
const x0 = Math.min(...cot), x1 = Math.max(...cot);

let y0 = H, y1 = -1;
for (let x = x0; x <= x1; x++) for (let y = 0; y < H; y++) {
  const [r,g,b,a] = at(x,y); if (laKem(r,g,b,a)) { if (y<y0) y0=y; if (y>y1) y1=y; }
}
const w2 = x1-x0+1, h2 = y1-y0+1;
console.log(`BADGE @2x: x=${x0}..${x1}  y=${y0}..${y1}  ${w2}x${h2}`);
console.log(`BADGE @1x: ${(w2/2).toFixed(1)} x ${(h2/2).toFixed(1)}   ti le ${(w2/h2).toFixed(2)}`);
console.log(`Tam badge @1x: x=${((x0+w2/2)/2).toFixed(1)} (khung 1152 -> lech ${(((x0+w2/2)/2)-576).toFixed(1)})  y=${((y0+h2/2)/2).toFixed(1)}`);

// Bien tren -> dem bump
const bien = [];
for (let x = x0; x <= x1; x++) {
  let t = -1;
  for (let y = 0; y < H; y++) { const [r,g,b,a] = at(x,y); if (laKem(r,g,b,a)) { t = y; break; } }
  bien.push(t);
}
const hop = bien.filter(v=>v>=0);
const minY = Math.min(...hop), maxY = Math.max(...hop);
console.log(`\nBien tren dao dong y=${minY}..${maxY} -> do sau bump ${maxY-minY} @2x (${((maxY-minY)/2).toFixed(1)} @1x)`);

const dinh = [];
for (let i = 8; i < bien.length-8; i++) {
  if (bien[i] < 0) continue;
  let la = true;
  for (let k=1;k<=8;k++) if (bien[i-k] < bien[i] || bien[i+k] < bien[i]) { la = false; break; }
  if (la && (dinh.length === 0 || i - dinh.at(-1) > 40)) dinh.push(i);
}
console.log(`So vong tron (dinh bien tren): ${dinh.length}`);
const kc = dinh.slice(1).map((v,i)=>v-dinh[i]);
if (kc.length) console.log(`Buoc giua tam: ${kc.join(', ')} @2x -> TB ${(kc.reduce((a,b)=>a+b,0)/kc.length/2).toFixed(1)} @1x`);
console.log(`Duong kinh vong tron ~ chieu cao badge = ${(h2/2).toFixed(1)} @1x`);
