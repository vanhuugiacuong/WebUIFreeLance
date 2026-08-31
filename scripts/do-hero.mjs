import sharp from 'sharp';
const g = await sharp('public/images/hero-chai.webp').ensureAlpha().raw().toBuffer({resolveWithObject:true});
const {width:W,height:H,channels:C}=g.info,d=g.data;
const A=(x,y)=>d[(y*W+x)*C+3];
const S=2, BX0=693,BX1=1614,BY0=291,BY1=514;

// Cum cac lo trong suot ben trong badge
const cot=[];
for(let x=BX0;x<=BX1;x++){let n=0;for(let y=BY0;y<=BY1;y++) if(A(x,y)<80) n++; cot.push(n);}
const k=[];let bd=-1;
for(let i=0;i<cot.length;i++){ if(cot[i]>1&&bd<0)bd=i; else if(cot[i]<=1&&bd>=0){if(i-bd>4)k.push([bd,i-1]);bd=-1;} }
if(bd>=0)k.push([bd,cot.length-1]);
const gr=[];for(const q of k){if(gr.length&&q[0]-gr.at(-1)[1]<30)gr.at(-1)[1]=q[1];else gr.push([...q]);}
console.log('=== LO KHOET TRONG BADGE (toa do @1x trong khung 1152x394) ===');
console.log(`    badge: x=${BX0/S}..${BX1/S}  y=${BY0/S}..${BY1/S}`);
gr.forEach((q,i)=>{
  let y0=1e9,y1=-1;
  for(let x=BX0+q[0];x<=BX0+q[1];x++)for(let y=BY0;y<=BY1;y++) if(A(x,y)<80){if(y<y0)y0=y;if(y>y1)y1=y;}
  const X=(BX0+q[0])/S, Y=y0/S, w=(q[1]-q[0]+1)/S, h=(y1-y0+1)/S;
  console.log(`  ${String(i+1).padEnd(2)} x=${X.toFixed(0).padEnd(5)} y=${Y.toFixed(0).padEnd(5)} ${w.toFixed(0)}x${h.toFixed(0)}   (tam x=${(X+w/2).toFixed(0)}, lech tam badge ${((X+w/2)-577).toFixed(0)})`);
});
