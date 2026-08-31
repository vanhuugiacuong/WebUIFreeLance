import sharp from 'sharp';
const g = await sharp('public/images/product-web49.webp').ensureAlpha().raw().toBuffer({resolveWithObject:true});
const {width:W,height:H,channels:C}=g.info,d=g.data;
const at=(x,y)=>{const i=(y*W+x)*C;return [d[i],d[i+1],d[i+2],d[i+3]];};
const S=2, ym=Math.round(H/2);
const kem=(r,gg,b,a)=>a>100&&r>235&&gg>220&&b>195;

console.log('LAT CAT NGANG giua banner (y=115@1x) — vi tri cac vach kem:');
let run=[],bd=-1;
for(let x=0;x<W;x++){ const k=kem(...at(x,ym));
  if(k&&bd<0)bd=x; else if(!k&&bd>=0){ run.push([bd,x-1]); bd=-1; } }
run.forEach(([a,b])=>console.log(`  x=${(a/S).toFixed(1)}..${(b/S).toFixed(1)}  day ${((b-a+1)/S).toFixed(1)}px`));

// Kim cuong: tim vung sang nhat (quang) roi vien kem cua hinh thoi
let bx0=1e9,bx1=-1,by0=1e9,by1=-1;
for(let y=0;y<H;y++)for(let x=Math.round(W*0.38);x<Math.round(W*0.62);x++){
  const [r,gg,b,a]=at(x,y);
  if(a>100&&r>250&&gg>235&&b>225){ if(x<bx0)bx0=x;if(x>bx1)bx1=x;if(y<by0)by0=y;if(y>by1)by1=y; } }
console.log(`\nVUNG SANG (quang + vien kim cuong) @1x: x=${(bx0/S).toFixed(0)}..${(bx1/S).toFixed(0)}  y=${(by0/S).toFixed(0)}..${(by1/S).toFixed(0)}`);
console.log(`  tam x=${((bx0+bx1)/2/S).toFixed(1)} (banner rong 1000 -> ${(((bx0+bx1)/2/S)/1000*100).toFixed(1)}%)  tam y=${((by0+by1)/2/S).toFixed(1)}`);
console.log(`  kich thuoc ${((bx1-bx0+1)/S).toFixed(0)}x${((by1-by0+1)/S).toFixed(0)}`);

// duong kinh quang: do sang giam dan tu tam
const cx=Math.round((bx0+bx1)/2), cy=Math.round((by0+by1)/2);
let s=[];
for(let dx=0;dx<=120;dx+=15){ const [r,gg,b]=at(cx+dx,cy); s.push(`+${(dx/S).toFixed(0)}px:${r},${gg},${b}`); }
console.log('  do sang toa ngang tu tam: '+s.join('  '));
