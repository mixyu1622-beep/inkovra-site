(()=>{const $=i=>document.getElementById(i),cv=$('cv'),x=cv.getContext('2d');
const AP=["Men's S","Men's M","Men's L","Men's XL","Men's 2XL"],WP=["Women's S","Women's M","Women's L","Women's XL"],KP=['Kids XS','Kids S','Kids M','Kids L','Kids XL'],NA=['N/A (non-apparel)'];
const CL={white:'#fafafa',black:'#1b1b1b',heather:'#9a9ca1',navy:'#1f2a44',red:'#b3202a',green:'#1e5631',pink:'#f4b6c8'};
// key → PRODUCT_MAP key in config.js
const P={tee:{n:'Custom T-Shirt',k:'tee',sh:'tee',two:1,sz:[...AP,...WP],a:[200,170,200,240]},
'hoodie-m':{n:"Men's Hoodie",k:'hoodie',sh:'hoodie',two:1,sz:AP,a:[205,190,190,170]},'hoodie-w':{n:"Women's Hoodie",k:'hoodie',sh:'hoodie',two:1,sz:WP,a:[205,190,190,170]},
jogger:{n:'Sweatpants',k:'jogger',sh:'pants',two:1,sz:[...AP,...WP],a:[320,150,90,120]},kids:{n:'Kids T-Shirt',k:'kids',sh:'tee',two:1,sz:KP,a:[215,190,170,200],small:1},
mug:{n:'Mug (11oz)',k:'mug',sh:'mug',sz:NA,a:[150,200,260,200],c:['white','black']},stocking:{n:'Christmas Stocking',k:'stocking',sh:'stock',sz:NA,a:[200,150,170,200],c:['white','red']},
doormat:{n:'Doormat',k:'home',sh:'mat',sz:NA,a:[90,170,420,260],c:['white','heather']},rug:{n:'Rug',k:'home',sh:'rug',sz:NA,a:[70,110,460,380],c:['white','heather']},curtain:{n:'Curtain',k:'home',sh:'curt',sz:NA,a:[80,70,440,460],c:['white']}};
let st={p:'tee',color:'white',side:'front',L:{front:[],back:[]},sel:-1};
$('prod').innerHTML=Object.entries(P).map(([k,v])=>`<option value="${k}">${v.n}</option>`).join('');
function setProd(k){st.p=k;const p=P[k];const cs=p.c||Object.keys(CL);if(!cs.includes(st.color))st.color=cs[0];
$('colors').innerHTML=cs.map(c=>`<button title="${c}" data-c="${c}" style="background:${CL[c]}" class="${c==st.color?'on':''}"></button>`).join('');
$('colors').querySelectorAll('button').forEach(b=>b.onclick=()=>{st.color=b.dataset.c;setProd(st.p)});
$('size').innerHTML=p.sz.map(s=>`<option>${s}</option>`).join('');$('sides').style.display=p.two?'':'none';if(!p.two)st.side='front';sides();draw()}
function sides(){$('sides').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.s==st.side))}
$('sides').onclick=e=>{if(e.target.dataset.s){st.side=e.target.dataset.s;st.sel=-1;sides();draw()}};$('prod').onchange=e=>setProd(e.target.value);
const shade=(h,f)=>{const n=parseInt(h.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;r=Math.min(255,r*f|0);g=Math.min(255,g*f|0);b=Math.min(255,b*f|0);return`rgb(${r},${g},${b})`};
function blank(c,sh,side){const col=CL[st.color];c.save();c.fillStyle='#eceff3';c.fillRect(0,0,600,600);c.fillStyle=col;c.strokeStyle=shade(col,.75);c.lineWidth=3;c.beginPath();const s=P[st.p].small?.85:1;c.translate(300,300);c.scale(s,s);c.translate(-300,-300);
if(sh=='tee'||sh=='hoodie'){c.moveTo(220,90);c.lineTo(110,140);c.lineTo(60,250);c.lineTo(140,280);c.lineTo(170,220);c.lineTo(170,540);c.lineTo(430,540);c.lineTo(430,220);c.lineTo(460,280);c.lineTo(540,250);c.lineTo(490,140);c.lineTo(380,90);
 if(sh=='tee'){if(side=='front')c.quadraticCurveTo(300,160,220,90);else c.quadraticCurveTo(300,115,220,90)}else c.quadraticCurveTo(300,130,220,90);c.closePath();c.fill();c.stroke();
 if(sh=='hoodie'){c.beginPath();if(side=='front'){c.moveTo(225,92);c.quadraticCurveTo(300,40,375,92);c.quadraticCurveTo(300,190,225,92);c.fillStyle=shade(col,.85);c.fill();c.stroke();c.strokeRect(220,420,160,70)}else{c.moveTo(220,92);c.quadraticCurveTo(300,0,380,92);c.quadraticCurveTo(300,175,220,92);c.fillStyle=shade(col,.9);c.fill();c.stroke()}}}
else if(sh=='pants'){c.moveTo(190,60);c.lineTo(410,60);c.lineTo(450,540);c.lineTo(330,540);c.lineTo(300,230);c.lineTo(270,540);c.lineTo(150,540);c.closePath();c.fill();c.stroke();c.strokeRect(190,60,220,30)}
else if(sh=='mug'){c.rect(140,170,280,300);c.fill();c.stroke();c.beginPath();c.lineWidth=28;c.strokeStyle=col;c.arc(430,320,70,-1.2,1.2);c.stroke();c.lineWidth=3;c.strokeStyle=shade(col,.75);c.beginPath();c.ellipse(280,170,140,18,0,0,7);c.fillStyle=shade(col,.85);c.fill();c.stroke()}
else if(sh=='stock'){c.fillStyle='#fff';c.fillRect(190,60,210,80);c.strokeRect(190,60,210,80);c.fillStyle=col;c.beginPath();c.moveTo(200,140);c.lineTo(390,140);c.lineTo(390,400);c.quadraticCurveTo(390,540,250,540);c.lineTo(140,540);c.quadraticCurveTo(80,470,140,430);c.lineTo(200,400);c.closePath();c.fill();c.stroke()}
else if(sh=='mat'){c.roundRect?c.roundRect(70,150,460,300,20):c.rect(70,150,460,300);c.fill();c.stroke()}
else if(sh=='rug'){c.rect(50,90,500,420);c.fill();c.stroke();for(let i=60;i<550;i+=14){c.beginPath();c.moveTo(i,90);c.lineTo(i,75);c.moveTo(i,510);c.lineTo(i,525);c.stroke()}}
else if(sh=='curt'){c.fillStyle='#888';c.fillRect(40,40,520,10);c.fillStyle=col;c.rect(70,55,460,500);c.fill();c.stroke();c.strokeStyle=shade(col,.88);for(let i=115;i<530;i+=46){c.beginPath();c.moveTo(i,55);c.lineTo(i,555);c.stroke()}}
c.restore()}
function lay(){return st.L[st.side]}
function drawL(c,l){c.save();c.translate(l.x,l.y);c.rotate(l.r*Math.PI/180);c.scale(l.s,l.s);if(l.t=='img')c.drawImage(l.el,-l.w/2,-l.h/2,l.w,l.h);else{c.font=`bold 48px "${l.f}"`;c.fillStyle=l.c;c.textAlign='center';c.textBaseline='middle';c.fillText(l.txt,0,0);l.w=c.measureText(l.txt).width;l.h=56}c.restore()}
function corners(l){const c=Math.cos(l.r*Math.PI/180),s=Math.sin(l.r*Math.PI/180),hw=l.w*l.s/2,hh=l.h*l.s/2,f=(a,b)=>[l.x+a*c-b*s,l.y+a*s+b*c];return{br:f(hw,hh),tr:f(hw,-hh),pts:[f(-hw,-hh),f(hw,-hh),f(hw,hh),f(-hw,hh)]}}
function render(c,side,guide){blank(c,P[st.p].sh,side);const a=P[st.p].a;c.save();c.beginPath();c.rect(...a);c.clip();st.L[side].forEach(l=>drawL(c,l));c.restore();
 if(guide){c.save();c.setLineDash([8,6]);c.strokeStyle='#00a86b';c.lineWidth=2;c.strokeRect(...a);c.setLineDash([]);c.fillStyle='#00a86b';c.font='13px sans-serif';c.fillText('PRINT AREA',a[0]+4,a[1]-6);
 const l=lay()[st.sel];if(l){const k=corners(l);c.strokeStyle='#2563eb';c.beginPath();k.pts.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.closePath();c.stroke();
 c.fillStyle='#2563eb';c.fillRect(k.br[0]-10,k.br[1]-10,20,20);c.beginPath();c.arc(k.tr[0],k.tr[1],11,0,7);c.fill();c.fillStyle='#fff';c.font='14px sans-serif';c.fillText('⟳',k.tr[0]-6,k.tr[1]+5);c.fillText('◢',k.br[0]-7,k.br[1]+5)}c.restore()}}
function draw(){render(x,st.side,1);$('layers').innerHTML=lay().map((l,i)=>`<div data-i="${i}" class="${i==st.sel?'on':''}"><span>${l.t=='img'?'🖼 Image':'T '+l.txt.slice(0,14)}</span><span>${Math.round(l.s*100)}%</span></div>`).reverse().join('')||'<p class="muted">No layers yet</p>';
 $('layers').querySelectorAll('[data-i]').forEach(d=>d.onclick=()=>{st.sel=+d.dataset.i;draw()});const l=lay()[st.sel];$('sc').value=l?l.s:1;$('ro').value=l?l.r:0;
 const out=lay().some(l=>corners(l).pts.some(([px,py])=>{const a=P[st.p].a;return px<a[0]-2||py<a[1]-2||px>a[0]+a[2]+2||py>a[1]+a[3]+2}));$('warn').textContent=out?'⚠ Part of the design is outside the print area and will be cut off.':''}
function addImg(src){const el=new Image();el.onload=()=>{const a=P[st.p].a,s=Math.min(a[2]*.8/el.width,a[3]*.8/el.height,1);lay().push({t:'img',src,el,w:el.width,h:el.height,x:a[0]+a[2]/2,y:a[1]+a[3]/2,s,r:0});st.sel=lay().length-1;draw()};el.src=src}
// downscale uploads (max 900px) to keep localStorage small
$('up').onchange=e=>{[...e.target.files].forEach(f=>{const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{const m=900,k=Math.min(1,m/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);addImg(c.toDataURL(f.type=='image/jpeg'?'image/jpeg':'image/png',.85))};im.src=fr.result};fr.readAsDataURL(f)});e.target.value=''};
$('addtxt').onclick=()=>{const t=$('txt').value.trim()||'Your Text',a=P[st.p].a;lay().push({t:'txt',txt:t,f:$('font').value,c:$('tcol').value,w:200,h:56,x:a[0]+a[2]/2,y:a[1]+a[3]/2,s:Math.min(1,a[2]/300),r:0});st.sel=lay().length-1;draw()};
['font','tcol'].forEach(id=>$(id).oninput=()=>{const l=lay()[st.sel];if(l&&l.t=='txt'){l.f=$('font').value;l.c=$('tcol').value;draw()}});
$('txt').oninput=()=>{const l=lay()[st.sel];if(l&&l.t=='txt'&&$('txt').value){l.txt=$('txt').value;draw()}};
$('sc').oninput=e=>{const l=lay()[st.sel];if(l){l.s=+e.target.value;draw()}};$('ro').oninput=e=>{const l=lay()[st.sel];if(l){l.r=+e.target.value;draw()}};
$('del').onclick=()=>{if(st.sel>=0){lay().splice(st.sel,1);st.sel=-1;draw()}};
$('up1').onclick=()=>{const L=lay(),i=st.sel;if(i>=0&&i<L.length-1){[L[i],L[i+1]]=[L[i+1],L[i]];st.sel++;draw()}};$('dn1').onclick=()=>{const L=lay(),i=st.sel;if(i>0){[L[i],L[i-1]]=[L[i-1],L[i]];st.sel--;draw()}};
document.addEventListener('keydown',e=>{if((e.key=='Delete'||e.key=='Backspace')&&document.activeElement.tagName!='INPUT')$('del').onclick()});
let drag=null;const pt=e=>{const b=cv.getBoundingClientRect();return[(e.clientX-b.left)*600/b.width,(e.clientY-b.top)*600/b.height]};
function hit(l,[px,py]){const c=Math.cos(-l.r*Math.PI/180),s=Math.sin(-l.r*Math.PI/180),dx=px-l.x,dy=py-l.y,u=dx*c-dy*s,v=dx*s+dy*c;return Math.abs(u)<=l.w*l.s/2&&Math.abs(v)<=l.h*l.s/2}
cv.onpointerdown=e=>{const p=pt(e),l=lay()[st.sel];cv.setPointerCapture(e.pointerId);if(l){const k=corners(l),d=q=>Math.hypot(p[0]-q[0],p[1]-q[1]);
 if(d(k.br)<22){drag={m:'s',l,d0:Math.hypot(p[0]-l.x,p[1]-l.y),s0:l.s};return}if(d(k.tr)<22){drag={m:'r',l,a0:Math.atan2(p[1]-l.y,p[0]-l.x),r0:l.r};return}}
 const L=lay();st.sel=-1;for(let i=L.length-1;i>=0;i--)if(hit(L[i],p)){st.sel=i;drag={m:'m',l:L[i],ox:p[0]-L[i].x,oy:p[1]-L[i].y};break}draw()};
cv.onpointermove=e=>{if(!drag)return;const p=pt(e),l=drag.l;if(drag.m=='m'){l.x=p[0]-drag.ox;l.y=p[1]-drag.oy}else if(drag.m=='s')l.s=Math.max(.05,drag.s0*Math.hypot(p[0]-l.x,p[1]-l.y)/drag.d0);else l.r=Math.round(drag.r0+(Math.atan2(p[1]-l.y,p[0]-l.x)-drag.a0)*180/Math.PI);draw()};
cv.onpointerup=cv.onpointercancel=()=>drag=null;
function snap(side,w,q){const c=document.createElement('canvas');c.width=c.height=600;render(c.getContext('2d'),side,0);if(!w)return c.toDataURL('image/png');const t=document.createElement('canvas');t.width=t.height=w;t.getContext('2d').drawImage(c,0,0,w,w);return t.toDataURL('image/jpeg',q||.8)}
$('dl').onclick=()=>{const a=document.createElement('a');a.href=snap(st.side);a.download='inkovra-design-'+st.p+'-'+st.side+'.png';a.click()};
$('add').onclick=()=>{const p=P[st.p];const ser=s=>st.L[s].map(({el,...r})=>r);const hasB=p.two&&st.L.back.length;
 if(!st.L.front.length&&!hasB){alert('Please add an image or text first.');return}
 const item={key:p.k,item:p.n,size:$('size').value,color:st.color,qty:Math.max(1,+$('qty').value||1),text:[...st.L.front,...st.L.back].filter(l=>l.t=='txt').map(l=>l.txt).join(' / '),
 desc:'Online designer'+(hasB?' · front + back':' · front'),img:snap('front',300,.8),imgBack:hasB?snap('back',300,.8):'',design:{v:1,product:st.p,color:st.color,area:p.a,canvas:600,front:ser('front'),back:p.two?ser('back'):[]}};
 const cart=JSON.parse(localStorage.getItem('inkovra_cart')||'[]');cart.push(item);
 try{localStorage.setItem('inkovra_cart',JSON.stringify(cart))}catch(err){delete item.design.front;delete item.design.back;item.design.note='artwork too large for browser storage; preview only';cart[cart.length-1]=item;try{localStorage.setItem('inkovra_cart',JSON.stringify(cart))}catch(e2){alert('Storage full: please remove items from your cart.');return}}
 const cc=$('cc');if(cc)cc.textContent=cart.reduce((a,b)=>a+(+b.qty||1),0);$('added').hidden=false};
const q=new URLSearchParams(location.search).get('p');if(q&&P[q])$('prod').value=q;setProd($('prod').value);window.__dz=st})();
