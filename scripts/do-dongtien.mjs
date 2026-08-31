import sharp from 'sharp';
for (const ten of ['dong-tien-tron','dong-tien-nua']) {
  const g = await sharp(`public/images/${ten}.webp`).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const {width:W,height:H,channels:C}=g.info,d=g.data;
  const at=(x,y)=>{const i=(y*W+x)*C;return [d[i],d[i+1],d[i+2],d[i+3]];};
  const S=2;
  console.log(`\n===== ${ten}  ${W}x${H}@2x -> ${W/S}x${H/S}@1x =====`);
  // hop bao alpha
  let x0=W,x1=-1,y0=H,y1=-1;
  for(let y=0;y<H;y++)for(let x=0;x<W;x++) if(at(x,y)[3]>60){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;}
  console.log(`hop bao @1x: x=${x0/S} y=${y0/S} ${(x1-x0+1)/S}x${(y1-y0+1)/S}`);
  const cy=Math.round((y0+y1)/2), cx=Math.round((x0+x1)/2);
  // lat cat ngang qua tam
  let run=[],truoc=null;
  for(let x=x0;x<=x1;x++){
    const [r,gg,b,a]=at(x,cy);
    const loai = a<60?'trong' : (r>235&&gg>215&&b>190?'kem' : (r>190&&gg<140?'cam':'khac'));
    if(loai!==truoc){ run.push([x,loai]); truoc=loai; }
  }
  run.push([x1+1,'het']);
  console.log('lat cat ngang qua tam:');
  for(let i=0;i<run.length-1;i++) console.log(`   x=${((run[i][0]-x0)/S).toFixed(1)}..${((run[i+1][0]-1-x0)/S).toFixed(1)}  ${run[i][1]}  (rong ${((run[i+1][0]-run[i][0])/S).toFixed(1)})`);
  // do trong suot giam dan o mep (co quang mo khong?)
  let s=[];
  for(let x=x0;x<=Math.min(x0+60,x1);x+=8){ const [r,gg,b,a]=at(x,cy); s.push(`${((x-x0)/S).toFixed(0)}:a${a}`); }
  console.log('   alpha tu mep trai: '+s.join(' '));
}
