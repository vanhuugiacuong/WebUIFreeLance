import sharp from 'sharp';
const P = 377; // chu ky @2x
await sharp('public/images/pattern-cam.webp').extract({left:0,top:0,width:P,height:188})
  .toFile('/tmp/tile.png');
const g = await sharp('/tmp/tile.png').ensureAlpha().raw().toBuffer({resolveWithObject:true});
const {width:W,height:H,channels:C}=g.info,d=g.data;
const on=(x,y)=>{const i=(y*W+x)*C;return d[i+3]>60 && d[i]>190 && d[i+1]<150;};

// gan nhan lien thong 8 huong
const nhan=new Int32Array(W*H).fill(0); let k=0; const vung=[];
for(let y=0;y<H;y++)for(let x=0;x<W;x++){
  if(!on(x,y)||nhan[y*W+x]) continue;
  k++; const st=[[x,y]]; nhan[y*W+x]=k;
  let x0=x,x1=x,y0=y,y1=y,n=0;
  while(st.length){ const [cx,cy]=st.pop(); n++;
    if(cx<x0)x0=cx; if(cx>x1)x1=cx; if(cy<y0)y0=cy; if(cy>y1)y1=cy;
    for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
      const nx=cx+dx,ny=cy+dy;
      if(nx<0||ny<0||nx>=W||ny>=H||nhan[ny*W+nx]||!on(nx,ny))continue;
      nhan[ny*W+nx]=k; st.push([nx,ny]); } }
  vung.push({w:x1-x0+1,h:y1-y0+1,x:x0,y:y0,n});
}
console.log(`Mot chu ky ${W}x${H}@2x co ${vung.length} vung lien thong`);
vung.sort((a,b)=>b.n-a.n);
console.log('\n10 vung lon nhat (kich thuoc @2x, so pixel):');
vung.slice(0,10).forEach((v,i)=>console.log(`  ${i+1}: ${v.w}x${v.h} tai (${v.x},${v.y})  ${v.n}px`));
const kt={}; vung.forEach(v=>{const k=`${v.w}x${v.h}`; kt[k]=(kt[k]||0)+1;});
const pho=Object.entries(kt).sort((a,b)=>b[1]-a[1]).slice(0,6);
console.log('\nKich thuoc lap lai nhieu nhat:', pho.map(([k,v])=>`${k}×${v}`).join('  '));
