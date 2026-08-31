import sharp from 'sharp';
const g = await sharp('public/images/gia-tri-nong-am.webp').ensureAlpha().raw().toBuffer({resolveWithObject:true});
const {width:W,height:H,channels:C}=g.info,d=g.data;
const at=(x,y)=>{const i=(y*W+x)*C;return [d[i],d[i+1],d[i+2],d[i+3]];};
const S=2;
console.log(`gia-tri-nong-am: ${W}x${H}@2x -> ${W/S}x${H/S}@1x`);
const kem=(r,gg,b,a)=>a>60&&r>235&&gg>218&&b>195;
// lat cat ngang giua anh
const ym=Math.round(H/2);
let run=[],truoc=null;
for(let x=0;x<W;x++){ const [r,gg,b,a]=at(x,ym); const l=a<60?'trong':(kem(r,gg,b,a)?'kem':'anh');
  if(l!==truoc){run.push([x,l]);truoc=l;} }
run.push([W,'het']);
console.log('lat cat ngang (giua):');
for(let i=0;i<run.length-1;i++) console.log(`   x=${(run[i][0]/S).toFixed(1)}..${((run[i+1][0]-1)/S).toFixed(1)}  ${run[i][1]}  (rong ${((run[i+1][0]-run[i][0])/S).toFixed(1)})`);
// lat cat doc giua
const xm=Math.round(W/2); run=[];truoc=null;
for(let y=0;y<H;y++){ const [r,gg,b,a]=at(xm,y); const l=a<60?'trong':(kem(r,gg,b,a)?'kem':'anh');
  if(l!==truoc){run.push([y,l]);truoc=l;} }
run.push([H,'het']);
console.log('lat cat doc (giua):');
for(let i=0;i<run.length-1;i++) console.log(`   y=${(run[i][0]/S).toFixed(1)}..${((run[i+1][0]-1)/S).toFixed(1)}  ${run[i][1]}  (rong ${((run[i+1][0]-run[i][0])/S).toFixed(1)})`);
// bien tren cua vung kem -> ban kinh goc khuyet
let out=[];
for(let x=0;x<=120;x+=8){ let t=-1; for(let y=0;y<H;y++){const [r,gg,b,a]=at(x,y); if(a>60){t=y;break;}} out.push(`x${(x/S).toFixed(0)}:${t<0?'-':(t/S).toFixed(1)}`); }
console.log('bien tren goc trai: '+out.join(' '));
