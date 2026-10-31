(()=>{
const $=id=>document.getElementById(id);
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const rnd=(a,b)=>a+Math.random()*(b-a);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const el=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e};

/* ================= ART ================= */
/* MoneyBot rig, drawn to match the 3D mascot render */
function botSVG(){return `<svg class="bot idle" viewBox="0 0 140 168" role="img" aria-label="MoneyBot">
<ellipse cx="70" cy="161" rx="34" ry="5" fill="#00FF99" opacity=".18"/>
<g class="rig">
 <g class="armL"><path d="M33 98 C 20 104, 14 118, 16 132" stroke="url(#shellB)" stroke-width="11" stroke-linecap="round" fill="none"/><circle cx="16" cy="134" r="6.5" fill="url(#pod)"/></g>
 <g class="armR"><path d="M107 96 C 122 88, 128 72, 126 58" stroke="url(#shellB)" stroke-width="11" stroke-linecap="round" fill="none"/><circle cx="126" cy="55" r="6.5" fill="url(#pod)"/></g>
 <path d="M38 88 C 34 130, 48 156, 70 156 C 92 156, 106 130, 102 88 Z" fill="url(#shell)"/>
 <path d="M44 96 C 42 124, 52 146, 66 150" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none" opacity=".7"/>
 <g class="head">
  <line x1="70" y1="26" x2="70" y2="9" stroke="#7d7d7d" stroke-width="2.6"/>
  <ellipse cx="70" cy="8" rx="11" ry="3.6" fill="url(#gold)"/>
  <rect x="14" y="40" width="14" height="32" rx="7" fill="url(#pod)"/>
  <rect x="112" y="40" width="14" height="32" rx="7" fill="url(#pod)"/>
  <rect x="22" y="24" width="96" height="66" rx="27" fill="url(#shell)"/>
  <path d="M34 33 C 44 27, 62 26, 74 27" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none" opacity=".9"/>
  <rect x="31" y="34" width="78" height="47" rx="18" fill="url(#visor)"/>
  <path d="M38 40 C 50 37, 70 36, 86 37" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none" opacity=".18"/>
  <g filter="url(#glow)">
   <g class="f f-idle"><g class="eyes"><ellipse cx="56" cy="55" rx="8.5" ry="10.5" fill="url(#scan)"/><ellipse cx="84" cy="55" rx="8.5" ry="10.5" fill="url(#scan)"/></g>
     <path class="mouth-talk" d="M64 69 Q70 74 76 69" stroke="#00FF99" stroke-width="2.6" fill="none" stroke-linecap="round"/></g>
   <g class="f f-happy"><path d="M48 57 Q56 47 64 57" stroke="#00FF99" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M76 57 Q84 47 92 57" stroke="#00FF99" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M60 66 Q70 78 80 66" stroke="#00FF99" stroke-width="3" fill="none" stroke-linecap="round"/></g>
   <g class="f f-oops"><path d="M49 52 L63 56 M77 56 L91 52" stroke="#00FF99" stroke-width="3.2" stroke-linecap="round"/><ellipse cx="56" cy="59" rx="5" ry="5.5" fill="url(#scan)"/><ellipse cx="84" cy="59" rx="5" ry="5.5" fill="url(#scan)"/><path d="M63 73 Q70 68 77 73" stroke="#00FF99" stroke-width="2.6" fill="none" stroke-linecap="round"/></g>
   <g class="f f-alert"><ellipse cx="56" cy="55" rx="10" ry="12" fill="url(#scan)"/><ellipse cx="84" cy="55" rx="10" ry="12" fill="url(#scan)"/><ellipse cx="70" cy="72" rx="3.5" ry="3" fill="none" stroke="#00FF99" stroke-width="2.4"/></g>
  </g>
 </g>
</g></svg>`}
const LOGO=(big)=>`<svg viewBox="0 0 ${big?460:150} ${big?170:40}" role="img" aria-label="Ink It">
${big?`<text x="0" y="112" font-family="Inter,system-ui,sans-serif" font-weight="900" font-size="128" letter-spacing="-7" fill="#fff">INK</text>
<text x="246" y="112" font-family="Inter,system-ui,sans-serif" font-weight="900" font-size="128" letter-spacing="-7" fill="#00FF99">IT</text>
<g transform="translate(398 18) rotate(35)"><path d="M0 0 L16 0 L16 52 L8 72 L0 52 Z" fill="#00FF99"/><circle cx="8" cy="40" r="3.5" fill="#000"/><path d="M8 44 L8 66" stroke="#000" stroke-width="2"/></g>
<path class="swash" d="M6 140 C 60 120, 110 160, 170 138 S 270 120, 320 140 S 410 150, 450 128" stroke="#00FF99" stroke-width="7" fill="none" stroke-linecap="round"/>`
:`<g transform="translate(0 2)"><rect x="2" y="6" width="30" height="24" rx="10" fill="#fff"/><rect x="6" y="10" width="22" height="15" rx="6" fill="#000"/><ellipse cx="12.5" cy="17.5" rx="2.6" ry="3.2" fill="#00FF99"/><ellipse cx="21.5" cy="17.5" rx="2.6" ry="3.2" fill="#00FF99"/><line x1="17" y1="6" x2="17" y2="1" stroke="#888" stroke-width="1.6"/><ellipse cx="17" cy="1" rx="4" ry="1.4" fill="#d9b44a"/></g>
<text x="42" y="28" font-family="Inter,system-ui,sans-serif" font-weight="900" font-size="26" letter-spacing="-1.4" fill="#fff">INK</text><text x="94" y="28" font-family="Inter,system-ui,sans-serif" font-weight="900" font-size="26" letter-spacing="-1.4" fill="#00FF99">IT</text>
<path d="M44 35 C 70 31, 100 38, 128 32" stroke="#00FF99" stroke-width="2.6" fill="none" stroke-linecap="round"/>`}</svg>`;
const ART={
 1:`<svg viewBox="0 0 200 200" fill="none" stroke="#00FF99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="60" width="164" height="80" rx="8" fill="#fff" stroke="none"/><rect x="18" y="60" width="164" height="12" rx="6" fill="#00FF99" stroke="none"/><path d="M32 96h70M32 112h110M110 128h58" stroke="#111" stroke-width="2.4"/><rect x="138" y="86" width="32" height="14" rx="3" stroke="#111" stroke-width="2.4"/><path d="M114 128c8-8 12 6 18-2s10 4 16-3 8 3 14-1" stroke="#0b1a40" stroke-width="3"/><g transform="translate(150 40) rotate(40)"><path d="M0 0h14v58l-7 16-7-16z" fill="#00FF99" stroke="#000" stroke-width="2"/></g></svg>`,
 2:`<svg viewBox="0 0 200 200" fill="none" stroke-linecap="round" stroke-linejoin="round"><g transform="rotate(-14 100 100)"><rect x="70" y="20" width="62" height="150" rx="8" fill="#fff"/><path d="M78 34h46M78 46h46M78 58h46" stroke="#c9c9c9" stroke-width="2.4"/><path d="M80 52c6-8 8 4 13-2s7 4 12-2 6 3 10 0" stroke="#0b1a40" stroke-width="3"/><path d="M70 72h62" stroke="#111" stroke-width="2.6" stroke-dasharray="5 4"/></g><path d="M36 120a60 60 0 0 1 10-66" stroke="#00FF99" stroke-width="4"/><path d="M36 50l12 2-2 12" stroke="#00FF99" stroke-width="4"/><path d="M164 80a60 60 0 0 1-10 66" stroke="#00FF99" stroke-width="4"/><path d="M164 150l-12-2 2-12" stroke="#00FF99" stroke-width="4"/></svg>`,
 3:`<svg viewBox="0 0 200 200" fill="none" stroke="#00FF99" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 70l80-44 80 44"/><path d="M30 70h140"/><path d="M42 78v62M78 78v62M122 78v62M158 78v62" opacity=".5"/><rect x="20" y="140" width="160" height="14" rx="3" fill="#00FF99" stroke="none"/><g transform="translate(58 98) rotate(-6)"><rect width="84" height="40" rx="4" fill="#fff" stroke="none"/><path d="M8 14h40M8 24h60" stroke="#111" stroke-width="2"/></g><g transform="translate(112 92) rotate(-12)"><rect x="-4" y="-4" width="56" height="26" rx="5" fill="none" stroke="#000" stroke-width="3"/><text x="24" y="14" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="11" fill="#000" stroke="none">RETURNED</text></g></svg>`
};
function badgeSVG(rank){const icon=rank==='Ink Legend'?'<path d="M100 66l10 22 24 3-18 16 5 24-21-12-21 12 5-24-18-16 24-3z" fill="#00FF99"/>':rank==='Vault Runner'?'<circle cx="100" cy="98" r="30" fill="none" stroke="#00FF99" stroke-width="6"/><circle cx="100" cy="98" r="16" fill="none" stroke="#00FF99" stroke-width="4"/><path d="M100 68v60M70 98h60" stroke="#00FF99" stroke-width="4"/>':'<g transform="translate(86 60) rotate(30 14 40)"><path d="M0 0h28v62l-14 22-14-22z" fill="#00FF99"/><circle cx="14" cy="46" r="5" fill="#000"/></g>';
 return `<svg class="badge" viewBox="0 0 200 220" role="img" aria-label="${rank} badge"><path d="M100 8l78 34v62c0 52-36 86-78 108C58 190 22 156 22 104V42z" fill="#050505" stroke="#00FF99" stroke-width="4"/><path d="M100 24l62 27v52c0 42-29 70-62 88-33-18-62-46-62-88V51z" fill="none" stroke="rgba(0,255,153,.35)" stroke-width="2"/>${icon}<rect x="40" y="150" width="120" height="30" rx="15" fill="#00FF99"/><text x="100" y="170" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="14" letter-spacing="1" fill="#000">${rank.toUpperCase()}</text></svg>`}

/* security background (guilloché) for the paper */
function guilloche(w,h,vertical){const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');g.lineWidth=.7;
  for(let j=0;j<26;j++){g.strokeStyle=`rgba(0,190,120,${.07+.05*(j%3===0)})`;g.beginPath();for(let t=0;t<=(vertical?h:w);t+=4){const a=t/(vertical?h:w)*Math.PI*2;const off=Math.sin(a*3+j*.32)*(vertical?w:h)*.16+Math.sin(a*7-j*.2)*(vertical?w:h)*.03+(j-13)*(vertical?w:h)*.03;const x=vertical?w/2+off:t,y=vertical?t:h/2+off;t?g.lineTo(x,y):g.moveTo(x,y)}g.stroke()}
  const cx=vertical?w/2:w*.8,cy=vertical?h*.62:h*.55,R=Math.min(w,h)*.36;
  for(let k=0;k<36;k++){g.strokeStyle=`rgba(0,190,120,${k%4?.08:.14})`;g.beginPath();for(let s=0;s<=360;s+=2){const a=s*Math.PI/180;const r=R*(.62+.3*Math.sin(9*a+k*.175)+.06*Math.sin(23*a));const x=cx+Math.cos(a+k*.02)*r,y=cy+Math.sin(a+k*.02)*r;s?g.lineTo(x,y):g.moveTo(x,y)}g.stroke()}
  return c.toDataURL('image/png')}
document.documentElement.style.setProperty('--guil',`url(${guilloche(1400,642,false)})`);
document.documentElement.style.setProperty('--guilb',`url(${guilloche(420,916,true)})`);
const MP='VAULT BANK SECURE DOCUMENT · '.repeat(30);$('microT').textContent=MP;$('microB').textContent=MP;

/* vault scene */
const sc=$('scene'),sctx=sc.getContext('2d');
let sceneRot=0,spinRAF=0;
function drawScene(rot=sceneRot){const k=devicePixelRatio,W=sc.clientWidth,H=sc.clientHeight;const cw0=Math.round(W*k),ch0=Math.round(H*k);if(sc.width!==cw0||sc.height!==ch0){sc.width=cw0;sc.height=ch0}const g=sctx;g.setTransform(k,0,0,k,0,0);
  g.fillStyle='#000';g.fillRect(0,0,W,H);
  const hz=H*.6,vx=W/2;
  /* back wall panels */
  g.strokeStyle='rgba(255,255,255,.035)';g.lineWidth=1;for(let x=(W%140)/2;x<W;x+=140){g.beginPath();g.moveTo(x,0);g.lineTo(x,hz);g.stroke()}
  /* vault door */
  const R=Math.min(W*.42,H*.5),cy=hz-R*.32;
  const rg=g.createRadialGradient(vx,cy,R*.2,vx,cy,R*1.35);rg.addColorStop(0,'rgba(0,255,153,.10)');rg.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=rg;g.fillRect(0,0,W,H);
  g.fillStyle='#070908';g.beginPath();g.arc(vx,cy,R,0,7);g.fill();
  g.strokeStyle='#1d2420';g.lineWidth=R*.05;g.beginPath();g.arc(vx,cy,R*.96,0,7);g.stroke();
  g.strokeStyle='rgba(0,255,153,.22)';g.lineWidth=2;g.beginPath();g.arc(vx,cy,R*.9,0,7);g.stroke();
  for(let i=0;i<24;i++){const a=i/24*Math.PI*2+rot;g.fillStyle=i%6===0?'rgba(0,255,153,.55)':'#1f2622';g.beginPath();g.arc(vx+Math.cos(a)*R*.84,cy+Math.sin(a)*R*.84,R*.022,0,7);g.fill()}
  g.strokeStyle='#161b18';g.lineWidth=R*.03;g.beginPath();g.arc(vx,cy,R*.62,0,7);g.stroke();
  g.strokeStyle='rgba(0,255,153,.16)';g.lineWidth=1.5;for(let i=0;i<60;i++){const a=i/60*Math.PI*2-rot*.5;const r1=R*.55,r2=R*(i%5?.58:.6);g.beginPath();g.moveTo(vx+Math.cos(a)*r1,cy+Math.sin(a)*r1);g.lineTo(vx+Math.cos(a)*r2,cy+Math.sin(a)*r2);g.stroke()}
  g.strokeStyle='#202823';g.lineWidth=R*.05;g.lineCap='round';for(let i=0;i<3;i++){const a=i/3*Math.PI*2-Math.PI/2+rot*1.6;g.beginPath();g.moveTo(vx,cy);g.lineTo(vx+Math.cos(a)*R*.4,cy+Math.sin(a)*R*.4);g.stroke();g.fillStyle='#202823';g.beginPath();g.arc(vx+Math.cos(a)*R*.4,cy+Math.sin(a)*R*.4,R*.05,0,7);g.fill()}
  g.fillStyle='#0c100e';g.beginPath();g.arc(vx,cy,R*.12,0,7);g.fill();g.strokeStyle='rgba(0,255,153,.4)';g.lineWidth=2;g.beginPath();g.arc(vx,cy,R*.12,0,7);g.stroke();
  /* floor grid */
  g.fillStyle='#000';g.fillRect(0,hz,W,H-hz);
  g.lineWidth=1;for(let i=-24;i<=24;i++){const xb=vx+i*W*.09;g.strokeStyle=`rgba(0,255,153,${.09-.0025*Math.abs(i)})`;g.beginPath();g.moveTo(vx+i*6,hz);g.lineTo(xb,H);g.stroke()}
  for(let j=1;j<16;j++){const t=Math.pow(j/15,2.1);const y=hz+(H-hz)*t;g.strokeStyle=`rgba(0,255,153,${.03+.1*t})`;g.beginPath();g.moveTo(0,y);g.lineTo(W,y);g.stroke()}
  g.strokeStyle='rgba(0,255,153,.35)';g.beginPath();g.moveTo(0,hz);g.lineTo(W,hz);g.stroke();
  /* vignette */
  const vg=g.createRadialGradient(vx,H*.5,Math.min(W,H)*.25,vx,H*.5,Math.max(W,H)*.75);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.85)');g.fillStyle=vg;g.fillRect(0,0,W,H);
}
drawScene();
function spinVault(rad,ms=1000){if(RM)return;cancelAnimationFrame(spinRAF);const from=sceneRot,to=sceneRot+rad,t0=performance.now();const f=t=>{const k=Math.min((t-t0)/ms,1),e=1-Math.pow(1-k,3);sceneRot=from+(to-from)*e;drawScene();if(k<1)spinRAF=requestAnimationFrame(f)};spinRAF=requestAnimationFrame(f)}
if(!RM)addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*-18,y=(e.clientY/innerHeight-.5)*-12;sc.style.transform=`translate(${x}px,${y}px)`});

/* mount art */
$('logoSm').innerHTML=LOGO(false);$('logoBig').innerHTML=LOGO(true);$('logoBig').firstElementChild.classList.add('logo-big');
$('botMain').innerHTML=botSVG();$('botTitle').innerHTML=botSVG();
const BOT=$('botMain').querySelector('.bot'),TBOT=$('botTitle').querySelector('.bot');
let moodT=0;
function mood(m,ms=1400,b=BOT){clearTimeout(moodT);b.classList.remove('happy','oops','alert','wave');void b.getBBox;if(m){b.classList.add(m)}if(m&&ms)moodT=setTimeout(()=>b.classList.remove(m),ms)}
setTimeout(()=>TBOT.classList.add('wave'),500);

/* ================= STATE + MONEY ================= */
const S={name:'Alex Rivera',xp:0,shownXP:0,streak:0,right:0,total:0,lives:3,best:0,mxp:{}};
let PROG={unlocked:1,best:{},sound:true};try{Object.assign(PROG,JSON.parse(localStorage.getItem('inkit-progress')||'{}'))}catch(e){}
const saveProg=()=>{try{localStorage.setItem('inkit-progress',JSON.stringify(PROG))}catch(e){}};
let MUTED=!PROG.sound;
try{S.best=+localStorage.getItem('inkit-best')||0}catch(e){}
const RANKS=[[0,'Rookie Signer'],[5500,'Vault Runner'],[9000,'Ink Legend']];
const rankOf=x=>RANKS.filter(r=>x>=r[0]).pop()[1];
const ONES=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const TENS=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
function w(n){if(n<20)return ONES[n];if(n<100)return TENS[Math.floor(n/10)]+(n%10?'-'+ONES[n%10]:'');if(n<1000)return ONES[Math.floor(n/100)]+' hundred'+(n%100?' '+w(n%100):'');return w(Math.floor(n/1000))+' thousand'+(n%1000?' '+w(n%1000):'')}
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const splitAmt=a=>{const d=Math.floor(a+1e-6);return[d,Math.round((a-d)*100)]};
const frac=c=>String(c).padStart(2,'0')+'/100';
const wordTokens=a=>{const[d,c]=splitAmt(a);return w(d).split(' ').concat(['and',frac(c)])};
const words=a=>cap(wordTokens(a).join(' '));
const money=a=>a.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
function transpose(d){const s=String(d).split('');if(s.length<2)return d+10;let i=s.length-2;if(s[i]===s[i+1])i=0;if(s[i]===s[i+1])return d+9;[s[i],s[i+1]]=[s[i+1],s[i]];return +s.join('')}
const today=new Date();today.setHours(12,0,0,0);
const fmtDate=d=>`${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}/${d.getFullYear()}`;
const addDays=n=>{const d=new Date(today);d.setDate(d.getDate()+n);return d};
const addMonths=n=>{const d=new Date(today);d.setMonth(d.getMonth()+n);return d};
$('todayTxt').textContent=today.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});

/* ================= AUDIO ================= */
let AC=null;
function audio(){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume()}catch(e){AC=null}}
function tone(f,d,type='square',v=.05,when=0){if(!AC||MUTED)return;const t=AC.currentTime+when,o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.02)}
const sfx={
  good(){tone(660,.09,'square',.045);tone(990,.14,'square',.045,.08)},
  combo(n){tone(520+n*90,.08,'triangle',.06);tone(780+n*90,.12,'triangle',.06,.07)},
  bad(){tone(140,.28,'sawtooth',.06);tone(110,.3,'sawtooth',.045,.05)},
  stamp(){if(!AC||MUTED)return;const t=AC.currentTime,b=AC.createBuffer(1,AC.sampleRate*.12,AC.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,3);const s=AC.createBufferSource(),g=AC.createGain();g.gain.value=.32;s.buffer=b;s.connect(g).connect(AC.destination);s.start(t);tone(85,.16,'sine',.25)},
  whoosh(){tone(300,.12,'triangle',.03);tone(180,.14,'triangle',.03,.05)},
  key(){tone(880,.025,'square',.02)},
  tick(){tone(1200,.03,'square',.022)},
  scan(i){tone(400+i*70,.05,'triangle',.035)},
  win(){[523,659,784,1046].forEach((f,i)=>tone(f,.16,'square',.045,i*.1))}
};

function buzz(p){try{if(navigator.vibrate)navigator.vibrate(p)}catch(e){}}
let pen=null;
function penStart(){if(!AC||MUTED||pen)return;try{const b=AC.createBuffer(1,AC.sampleRate,AC.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;const n=AC.createBufferSource();n.buffer=b;n.loop=true;const f=AC.createBiquadFilter();f.type='bandpass';f.frequency.value=2800;f.Q.value=.7;const g=AC.createGain();g.gain.value=0;n.connect(f).connect(g).connect(AC.destination);n.start();pen={n,g}}catch(e){pen=null}}
function penMove(v){if(pen)pen.g.gain.setTargetAtTime(Math.min(.045,v*.0035),AC.currentTime,.03)}
function penStop(){if(!pen)return;const p=pen;pen=null;p.g.gain.setTargetAtTime(0,AC.currentTime,.03);setTimeout(()=>{try{p.n.stop()}catch(e){}},220)}
/* ================= FX ================= */
const fx=$('fx'),fctx=fx.getContext('2d');let parts=[],fxOn=false;
function sizeFx(){fx.width=innerWidth*devicePixelRatio;fx.height=innerHeight*devicePixelRatio}sizeFx();
function burst(x,y,n=26,colors=['#00FF99','#FFFFFF','#B8FFD9']){if(RM)return;for(let i=0;i<n;i++){const a=rnd(0,Math.PI*2),s=rnd(3,9);parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-3,life:1,c:pick(colors),r:rnd(3,7),rot:rnd(0,6),bill:Math.random()<.18})}if(!fxOn){fxOn=true;requestAnimationFrame(stepFx)}}
function burstAt(node,n){if(!node)return;const r=node.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,n)}
function stepFx(){const k=devicePixelRatio;fctx.clearRect(0,0,fx.width,fx.height);parts=parts.filter(p=>p.life>0);for(const p of parts){p.x+=p.vx;p.y+=p.vy;p.vy+=.33;p.vx*=.98;p.life-=.02;p.rot+=.18;fctx.save();fctx.globalAlpha=Math.max(p.life,0);fctx.translate(p.x*k,p.y*k);fctx.rotate(p.rot);if(p.bill){fctx.fillStyle='#00FF99';fctx.fillRect(-9*k,-5*k,18*k,10*k);fctx.fillStyle='#0A5C2E';fctx.beginPath();fctx.arc(0,0,2.6*k,0,7);fctx.fill()}else{fctx.fillStyle=p.c;fctx.fillRect(-p.r*k/2,-p.r*k/2,p.r*k,p.r*k)}fctx.restore()}if(parts.length)requestAnimationFrame(stepFx);else{fxOn=false;fctx.clearRect(0,0,fx.width,fx.height)}}

/* ================= HUD + SCORING ================= */
function renderXP(){const from=S.shownXP,to=S.xp,t0=performance.now();const run=t=>{const k=Math.min((t-t0)/600,1),e=1-Math.pow(1-k,3);$('xp').textContent=Math.round(from+(to-from)*e).toLocaleString('en-US');if(k<1)requestAnimationFrame(run);else S.shownXP=to};requestAnimationFrame(run);
  const idx=RANKS.findIndex(r=>r[1]===rankOf(S.xp));const lo=RANKS[idx][0],hi=RANKS[idx+1]?RANKS[idx+1][0]:lo+3000;$('xpFill').style.width=Math.min(100,(S.xp-lo)/(hi-lo)*100)+'%';
  const rk=rankOf(S.xp);if($('rankTxt').textContent!==rk){$('rankTxt').textContent=rk;if(S.xp>0){say(`Rank up. You're a <b>${rk}</b> now. You just entered rare air.`);mood('happy',1600)}}}
function floatXP(n,node,label){const st=$('stage').getBoundingClientRect();let x=st.width/2,y=st.height/2;if(node){const r=node.getBoundingClientRect();x=r.left-st.left+r.width/2;y=r.top-st.top}const f=el('div','float',(label?label+' ':'')+'+'+n);f.style.left=x+'px';f.style.top=y+'px';$('stage').appendChild(f);setTimeout(()=>f.remove(),1100)}
function mult(){return 1+Math.min(S.streak,5)*.2}
function award(base,node,label){const n=Math.round(base*mult());S.xp+=n;S.mxp[curMission]=(S.mxp[curMission]||0)+n;renderXP();floatXP(n,node,label);return n}
function hit(node,quiet){S.streak++;S.right++;S.total++;const s=$('streak');if(S.streak>=2){s.textContent='x'+mult().toFixed(1)+' streak';s.classList.add('on')}if(!quiet){S.streak>=2?sfx.combo(Math.min(S.streak,6)):sfx.good();mood('happy',1100)}if(node&&!quiet)burstAt(node,S.streak>=3?36:22)}
function miss(quiet){S.streak=0;S.total++;$('streak').classList.remove('on');if(quiet)return;sfx.bad();buzz(60);mood('oops',1100);if(!RM){const a=$('app');a.classList.remove('shake');void a.offsetWidth;a.classList.add('shake')}}
let curMission=0;
function setMission(m){curMission=m;[1,2,3].forEach(i=>{const n=$('n'+i);n.classList.toggle('now',i===m);n.classList.toggle('done',i<m)});[1,2].forEach(i=>$('w'+i).classList.toggle('done',i<m))}
function pips(n,i){$('sub').textContent=n?`· ${['','Cut the check','Flip & endorse','Teller rush'][curMission]} · ${i+1}/${n}`:''}
const SHIELD='<svg class="life" viewBox="0 0 16 18"><path d="M8 0l8 3v6c0 4.5-3.4 7.6-8 9-4.6-1.4-8-4.5-8-9V3z"/></svg>';
function setLives(show){const L=$('lives');L.hidden=!show;L.innerHTML='';for(let i=0;i<3;i++){L.insertAdjacentHTML('beforeend',SHIELD);if(i>=S.lives)L.lastElementChild.classList.add('lost')}}

/* ================= COMMS ================= */
let sayTok=0;
async function say(html){const tok=++sayTok;const t=$('say');if(RM){t.innerHTML=html;return}BOT.classList.add('talk');const tmp=document.createElement('div');tmp.innerHTML=html;const full=tmp.textContent;t.textContent='';for(let i=0;i<=full.length;i+=3){if(tok!==sayTok)return;t.textContent=full.slice(0,i);await wait(11)}if(tok===sayTok){t.innerHTML=html;BOT.classList.remove('talk')}}
function bill(b){const c=$('billCard');if(!b){c.hidden=true;return}c.hidden=false;$('billHead').textContent=b.head;$('billTo').textContent=b.to;$('billFor').textContent=b.for;$('billAmt').textContent='$'+money(b.amt)}
/* rubber stamp lands on the paper itself */
function stamp(text,good,small){sfx.stamp();buzz(good?18:[30,40,30]);if(good)spinVault(.6,700);const host=surf();const s=el('div','rstamp '+(good?'good':'bad'),text);if(small)s.appendChild(el('small',null,small));host.appendChild(s);host.classList.remove('thump');void host.offsetWidth;host.classList.add('thump');const r=host.getBoundingClientRect();if(!RM)burst(r.left+r.width/2,r.top+r.height*.46,good?30:14,good?['#00FF99','#B8FFD9','#0A5C2E']:['#ffffff','#6E6E6E'])}

/* ================= TIMER ================= */
let tRAF=0,tEnd=0,tDur=0,tCb=null,lastTick=0,tRem=0,tPaused=false;
function tLoop(t){const left=Math.max(tEnd-t,0),k=left/tDur;$('timerBar').style.transform=`scaleX(${k})`;$('timer').classList.toggle('low',k<.3);if(k<.3&&t-lastTick>320){lastTick=t;sfx.tick()}if(left<=0){const c=tCb;stopTimer();c&&c();return}tRAF=requestAnimationFrame(tLoop)}
function startTimer(sec,cb){stopTimer();tDur=sec*1000;tEnd=performance.now()+tDur;tCb=cb;$('timer').hidden=false;tRAF=requestAnimationFrame(tLoop)}
function pauseTimer(){if(!tCb||tPaused)return;tPaused=true;tRem=tEnd-performance.now();cancelAnimationFrame(tRAF)}
function resumeTimer(){if(!tPaused)return;tPaused=false;tEnd=performance.now()+tRem;tRAF=requestAnimationFrame(tLoop)}
function timeLeft(){return Math.max((tPaused?performance.now()+tRem:tEnd)-performance.now(),0)/1000}
function stopTimer(){cancelAnimationFrame(tRAF);tCb=null;tPaused=false;$('timer').hidden=true;$('timer').classList.remove('low')}

/* ================= PANEL ================= */
let keyHandler=null;
addEventListener('keydown',e=>{if(e.target&&e.target.tagName==='INPUT')return;if(e.key==='Escape'&&$('scrPause').hidden&&$('scrTitle').hidden&&$('scrEnd').hidden){openPause();return}keyHandler&&keyHandler(e)});
const panel=()=>$('panel');
function clearPanel(){panel().innerHTML='';keyHandler=null}
function btn(label,cls,fn,parent){const b=el('button','btn '+cls,label);b.type='button';b.onclick=fn;(parent||panel()).appendChild(b);return b}
function actsRow(){const r=el('div','acts');panel().appendChild(r);return r}
function waitButton(label,cls='primary big',hint){return new Promise(res=>{const r=actsRow();const b=btn(label,cls,()=>{keyHandler=null;res()},r);if(hint)panel().appendChild(el('div','hint',hint));keyHandler=e=>{if(e.key==='Enter'){keyHandler=null;res()}};setTimeout(()=>b.focus({preventScroll:true}),50)})}

/* ================= CHECK HELPERS ================= */
const F=k=>document.querySelector(`[data-f="${k}"]`);
const FK=k=>F(k==='line'?'words':k);
function setF(k,val,anim=true){const v=F(k).querySelector('.v');v.textContent=val;if(anim&&val){v.classList.remove('pop');void v.offsetWidth;v.classList.add('pop')}}
function clearMarks(){document.querySelectorAll('.mark,.ring,.rstamp').forEach(m=>m.remove());document.querySelectorAll('.sel,.tour').forEach(m=>m.classList.remove('sel','tour'))}
function mark(k,kind){const f=FK(k);if(!f)return;const m=el('span','mark '+kind,kind==='ok'?'✓':kind==='no'?'✕':'–');if(k==='line'){m.style.top='auto';m.style.bottom='-2.6cqw'}f.appendChild(m)}
function ring(k){const f=F(k);if(f)f.appendChild(el('span','ring'))}
function sigSVG(name,seed=1){const n=Math.max(name.length,6);let d='M 4 30';let x=4;const R=()=>{seed=(seed*9301+49297)%233280;return seed/233280};for(let i=0;i<n;i++){x+=7+R()*5;const y=8+R()*26;d+=` Q ${x-4} ${y} ${x} ${20+R()*14}`}d+=` M 10 36 Q ${x/2} 28 ${x+6} 34`;return `<svg viewBox="0 0 ${x+12} 44" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path d="${d}" fill="none" stroke="#0b1a40" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
function blankCheck({holder,addr,no=1042,sticky=null}){
  const c=$('check');c.hidden=false;c.classList.remove('tappable','thump');$('back').hidden=true;clearMarks();
  $('c-holder').textContent=holder;$('c-addr').textContent=addr;$('c-no').textContent=no;$('c-micr').textContent=`⑆000000000⑆ 0000000000⑈ ${no}`;
  ['date','payto','amt','words','memo'].forEach(k=>setF(k,'',false));F('sig').querySelector('.v').innerHTML='';
  const st=$('sticky');st.hidden=!sticky;if(sticky)st.textContent=sticky;
}
async function enterCheck(node=$('check')){camReset(true);node.classList.remove('exit','enter','flipout','flipin');void node.offsetWidth;node.classList.add('enter');sfx.whoosh();await wait(RM?10:500);node.classList.remove('enter');sizeInk()}
async function exitCheck(node=$('check')){node.classList.remove('enter','flipin','thump');void node.offsetWidth;node.classList.add('exit');sfx.whoosh();await wait(RM?10:340);node.classList.remove('exit');node.hidden=true;clearInk();hideGuide();clearMarks();camReset(true)}

/* ================= INK LAYER ================= */
const ink=$('ink'),ictx=ink.getContext('2d');
let strokes=[],cur=null,lastPx=null,inkMode=null,downAt=null,moved=false,downZone=null;
let onTap=null,onStrokeEnd=null,zoneAt=null,onDrag=null;
function rectIn(node){const s=$('stage').getBoundingClientRect(),r=node.getBoundingClientRect();return{x:r.left-s.left,y:r.top-s.top,w:r.width,h:r.height}}
const surf=()=>{const c=$('check');return !c.hidden?c:$('back')};
const toN=p=>{const r=rectIn(surf());return{u:(p.x-r.x)/r.w,v:(p.y-r.y)/r.h}};
const P=s=>{const r=rectIn(surf());return s.n.map(q=>({x:r.x+q.u*r.w,y:r.y+q.v*r.h}))};
function sizeInk(){const r=$('stage').getBoundingClientRect();ink.width=r.width*devicePixelRatio;ink.height=r.height*devicePixelRatio;redraw()}
function clearInk(filter){strokes=filter?strokes.filter(s=>!filter(s)):[];cur=null;redraw()}
function redraw(){const k=devicePixelRatio;ictx.setTransform(k,0,0,k,0,0);ictx.clearRect(0,0,ink.width/k,ink.height/k);ictx.strokeStyle='#0b1a40';ictx.lineCap='round';ictx.lineJoin='round';
  for(const s of strokes){const q=P(s);for(let i=1;i<q.length;i++){const d=Math.hypot(q[i].x-q[i-1].x,q[i].y-q[i-1].y);ictx.lineWidth=Math.max(1.6,3.2-d*.08);ictx.beginPath();ictx.moveTo(q[i-1].x,q[i-1].y);ictx.lineTo(q[i].x,q[i].y);ictx.stroke()}}}
const ptr=e=>{const r=ink.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
function setInk(mode){inkMode=mode;ink.classList.toggle('live',!!mode);if(!mode){onTap=onStrokeEnd=zoneAt=onDrag=null;$('nib').hidden=true;penStop()}}
ink.addEventListener('pointerdown',e=>{if(!inkMode)return;e.preventDefault();try{ink.setPointerCapture(e.pointerId)}catch(_){}downAt=ptr(e);moved=false;cur=null;downZone=zoneAt?zoneAt(downAt):null});
ink.addEventListener('pointermove',e=>{if(!downAt)return;const p=ptr(e);
  if(!moved&&Math.hypot(p.x-downAt.x,p.y-downAt.y)>6){moved=true;if(onDrag&&onDrag(downAt,p,true)==='consume'){cur=null;return}if(downZone){cur={z:downZone,n:[toN(downAt)]};lastPx=downAt;strokes.push(cur);penStart()}}
  if(moved){if(onDrag&&onDrag(downAt,p,false)==='consume')return;if(cur&&Math.hypot(p.x-lastPx.x,p.y-lastPx.y)>1.5){penMove(Math.hypot(p.x-lastPx.x,p.y-lastPx.y));cur.n.push(toN(p));lastPx=p;redraw()}}});
ink.addEventListener('pointerup',e=>{penStop();if(!downAt)return;const p=ptr(e);if(onDrag)onDrag(downAt,p,'end');if(!moved){if(onTap){ink.style.pointerEvents='none';const hitEl=document.elementFromPoint(e.clientX,e.clientY);ink.style.pointerEvents='';const f=hitEl&&hitEl.closest('[data-f]');onTap(f?f.dataset.f:null,downAt)}}else if(cur&&onStrokeEnd)onStrokeEnd(cur);downAt=null;cur=null});
ink.addEventListener('pointercancel',()=>{penStop();downAt=null;cur=null});
const nib=$('nib');
ink.addEventListener('pointermove',e=>{if(!inkMode||e.pointerType==='touch'){nib.hidden=true;return}const p=ptr(e);nib.hidden=false;nib.style.transform=`translate(${p.x}px,${p.y}px)`});
ink.addEventListener('pointerleave',()=>{nib.hidden=true});
const inR=(p,r,pad=0)=>p.x>=r.x-pad&&p.x<=r.x+r.w+pad&&p.y>=r.y-pad&&p.y<=r.y+r.h+pad;
let guideFn=null;
function placeGuide(){if(!guideFn)return;const r=guideFn(),g=$('guide');g.hidden=false;g.style.left=r.x+'px';g.style.top=r.y+'px';g.style.width=r.w+'px';g.style.height=r.h+'px'}
function showGuide(fn,txt){guideFn=fn;$('guideTxt').textContent=txt;placeGuide()}
function hideGuide(){guideFn=null;$('guide').hidden=true}
function strokeLen(s){const q=P(s);let l=0;for(let i=1;i<q.length;i++)l+=Math.hypot(q[i].x-q[i-1].x,q[i].y-q[i-1].y);return l}
function sigQuality(list,zone){const pts=list.flatMap(P);if(!pts.length)return{none:true};const len=list.reduce((a,s)=>a+strokeLen(s),0);const inside=pts.filter(p=>inR(p,zone,4)).length/pts.length;const xs=pts.map(p=>p.x);const span=(Math.max(...xs)-Math.min(...xs))/zone.w;return{len,inside,span,ok:len>=60&&inside>=.8&&span>=.28}}
/* camera: zooms the paper toward whatever the player is working on */
const cam=$('cam');let camTarget=null,camOpts={};
function follow(ms=640){const end=performance.now()+ms;const f=()=>{redraw();placeGuide();if(performance.now()<end)requestAnimationFrame(f)};requestAnimationFrame(f)}
function camReset(snap){camTarget=null;if(snap){cam.classList.add('snap');cam.style.transform='';void cam.offsetWidth;cam.classList.remove('snap');redraw();placeGuide()}else{cam.style.transform='';follow()}}
function focusOn(t,opts={}){if(!t)return camReset();const host=t.closest('.check,.back');if(!host||host.hidden)return;camTarget=t;camOpts=opts;const{padX=.16,padY=1}=opts;
  const cw=cam.clientWidth,ch=cam.clientHeight;const maxS=Math.min(opts.maxS||2.2,cw>760?1.35:cw>520?1.8:2.4);let x=0,y=0,n=t;while(n&&n!==cam){x+=n.offsetLeft;y+=n.offsetTop;n=n.offsetParent}
  const w=t.offsetWidth,h=t.offsetHeight;let s=Math.min(maxS,cw*.94/(w*(1+2*padX)),ch*.88/(h*(1+2*padY)));s=Math.max(1,s);
  const hx=host.offsetLeft,hy=host.offsetTop,hw=host.offsetWidth,hh=host.offsetHeight;const cl=(v,a,b)=>Math.min(Math.max(v,a),b);
  let tx=cw/2-(x+w/2)*s,ty=ch/2-(y+h/2)*s;
  tx=hw*s>cw?cl(tx,cw-(hx+hw)*s-10,-hx*s+10):cw/2-(hx+hw/2)*s;
  ty=hh*s>ch?cl(ty,ch-(hy+hh)*s-10,-hy*s+10):ch/2-(hy+hh/2)*s;
  cam.style.transform=`translate(${tx}px,${ty}px) scale(${s})`;follow()}
function focusToggle(t){if(camTarget===t)camReset();else focusOn(t,{maxS:2})}
new ResizeObserver(()=>{sizeInk();placeGuide();if(camTarget)focusOn(camTarget,camOpts)}).observe($('stage'));
addEventListener('resize',()=>{sizeFx();drawScene()});

/* ================= OVERLAYS ================= */
function show(id){['scrTitle','scrBrief','scrEnd'].forEach(k=>$(k).hidden=k!==id)}
function brief(n,title,text,how){return new Promise(res=>{setMission(n);spinVault(2.4,1300);$('bNum').textContent='0'+n;$('bArt').innerHTML=ART[n];$('bEyebrow').textContent='Mission '+n+' of 3';$('bTitle').textContent=title;$('bText').textContent=text;const h=$('bHow');h.innerHTML='';how.forEach(([b,t])=>{const s=el('span');s.appendChild(el('b',null,b+' '));s.appendChild(document.createTextNode(t));h.appendChild(s)});show('scrBrief');sfx.whoosh();$('bGo').focus();const go=()=>{$('bGo').onclick=null;keyHandler=null;show(null);sizeInk();res()};$('bGo').onclick=go;keyHandler=e=>{if(e.key==='Enter')go()}})}

/* ================= TOUR ================= */
async function tour(){
  blankCheck({holder:S.name,addr:'1200 Main St · Bowling Green, KY',no:1041});
  setF('date',fmtDate(today),false);setF('payto','Example Store',false);setF('amt','12.50',false);setF('words','Twelve and 50/100 ————————',false);setF('memo','School supplies',false);F('sig').querySelector('.v').innerHTML=sigSVG(S.name,4);
  await enterCheck();mood('wave',2000);
  const steps=[
    ['holder','This is <b>your</b> check. Your name and address are printed by the bank.'],
    ['date','<b>Date</b>: the day you write it. Check the Today card up top.'],
    ['payto','<b>Pay to the order of</b>: the exact name of who gets the money.'],
    ['amt','<b>Amount box</b>: the number, with cents.'],
    ['words','<b>Amount in words</b>: cents go as a fraction like 50/100. Then draw a line through the empty space so nobody can add to it.'],
    ['memo','<b>Memo</b>: what it\'s for. Optional, but it\'s your receipt trail.'],
    ['sig','<b>Your signature</b> makes it valid. It goes on last, never on a blank check.'],
    ['micr','<b>Routing and account numbers</b>. Printed by the bank. Leave them alone.']
  ];
  for(let i=0;i<steps.length;i++){
    document.querySelectorAll('.tour').forEach(x=>x.classList.remove('tour'));F(steps[i][0]).classList.add('tour');focusOn(F(steps[i][0]),{maxS:1.7});say(steps[i][1]);
    clearPanel();const r=actsRow();let go;const p=new Promise(res=>go=res);
    btn(i<steps.length-1?'Next':'I got it','primary',()=>go('next'),r);
    if(i===0)btn('Skip the tour','ghost',()=>go('skip'),r);
    panel().appendChild(el('div','hint',`${i+1} of ${steps.length} · Enter for next`));
    keyHandler=e=>{if(e.key==='Enter'||e.key==='ArrowRight')go('next')};
    sfx.key();
    if(await p==='skip')break;
  }
  clearPanel();await exitCheck();
}

/* ================= MISSION 1 ================= */
const M1=[
  {payee:"Jordan's Auto Shop",nick:'jordan',amt:245.50,head:'Invoice #2207',forTxt:'Brake repair'},
  {payee:'Lakeside Apartments',nick:'lakeside',amt:1180,head:'Rent notice · Unit 4B',forTxt:'November rent'},
  {payee:'Westview High School',nick:'westview',amt:35,head:'Permission slip',forTxt:'Science center field trip'}
];
const ORDER=['date','payto','amt','words','memo','sig'];
const FIELD_NAME={date:'Date',payto:'Pay to the order of',amt:'Amount box',words:'Amount in words',memo:'Memo',sig:'Signature',line:'Line-out'};
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
function makeTiles(a){const[d,c]=splitAmt(a);const right=wordTokens(a);const t=transpose(d);const dec=new Set(['dollars','cents','point']);w(t).split(' ').forEach(x=>{if(!right.includes(x))dec.add(x)});if(c){const cw=w(c);if(!right.includes(cw))dec.add(cw)}else dec.add('zero');const fr=frac((c+5)%100);if(!right.includes(fr))dec.add(fr);return shuffle([...new Set(right.concat([...dec].slice(0,6)))])}
async function mission1(){
  await brief(1,'Cut the Check','You\'re paying three bills. Copy each one onto a blank check, sign it, and hand it over. MoneyBot inspects every line.',[['Tap','a line on the check'],['Draw','your signature and the line-out'],['Hand it over','when it\'s done']]);
  setLives(false);
  await tour();
  for(let i=0;i<M1.length;i++){
    const s=M1[i];pips(M1.length,i);
    bill({head:s.head,to:s.payee,for:s.forTxt,amt:s.amt});
    blankCheck({holder:S.name,addr:'1200 Main St · Bowling Green, KY',no:1042+i});
    await enterCheck();
    await runWriteCheck(s,i);
    await exitCheck();
  }
  bill(null);
}
function runWriteCheck(s,idx){
  return new Promise(resolve=>{
    const V={date:'',payto:'',amt:'',words:[],memo:''};
    const t0=performance.now();let sel=null;
    const tiles=makeTiles(s.amt);
    const zones=()=>{const sg=rectIn(F('sig')),wd=rectIn(F('words'));return{sig:{x:sg.x,y:sg.y-sg.h*.7,w:sg.w,h:sg.h*1.85},words:{x:wd.x,y:wd.y-wd.h*.3,w:wd.w,h:wd.h*1.5}}};
    const missingReq=()=>['date','payto','amt'].filter(k=>!V[k]).concat(V.words.length?[]:['words']);
    const wordsText=()=>V.words.length?cap(V.words.join(' ')):'';
    function render(k){
      if(k==='words')setF('words',wordsText(),false);else if(k!=='sig')setF(k,V[k],false);
      const fv=panel().querySelector('.val');if(fv){const txt=k==='words'?wordsText():k==='amt'&&V.amt?'$'+V.amt:V[k];fv.textContent=txt||(k==='sig'?'Draw on the signature line':'Empty');fv.classList.toggle('empty',!txt)}
    }
    function next(k){const i=ORDER.indexOf(k);for(let j=i+1;j<ORDER.length;j++){const n=ORDER[j];if(n==='sig'||n==='memo'||(n==='words'?!V.words.length:!V[n]))return select(n)}select('sig')}
    function select(k){
      sel=k;document.querySelectorAll('.fld.sel').forEach(x=>x.classList.remove('sel'));F(k).classList.add('sel');clearPanel();sfx.key();
      focusOn(F(k),k==='sig'?{padY:1.3,padX:.12}:k==='words'?{padX:.04,padY:.9}:{});
      if(k==='sig'&&!missingReq().length){const sg=F('sig');sg.classList.remove('ready');void sg.offsetWidth;sg.classList.add('ready');say('Every line is filled. <b>Now</b> you sign.')}
      const fc=el('div','focus');fc.appendChild(el('span','label',FIELD_NAME[k]));fc.appendChild(el('span','val'));panel().appendChild(fc);
      const tip=el('span','tip');fc.appendChild(tip);
      if(k==='sig'){showGuide(()=>zones().sig,'Sign here');tip.textContent='Draw your signature on the line, right on the check.';mood('alert',700)}
      else hideGuide();
      if(k==='date'||k==='amt'){
        tip.textContent=k==='date'?'Month / day / year. Check the Today card.':'Numbers only, with cents. Match the bill.';
        const kp=el('div','keypad');const sep=k==='date'?'/':'.';
        const press=ch=>{sfx.key();if(ch==='⌫')V[k]=V[k].slice(0,-1);else if(ch==='done'){return next(k)}else{if(k==='amt'){if(ch==='.'&&V.amt.includes('.'))return;if(/\.\d\d$/.test(V.amt))return;if(V.amt.length>=8)return}else if(V.date.length>=10)return;V[k]+=ch}render(k)};
        ['1','2','3','4','5','6','7','8','9',sep,'0','⌫'].forEach(ch=>{const b=el('button','key',ch);b.type='button';b.setAttribute('aria-label',ch==='⌫'?'Delete':ch);b.onclick=()=>press(ch);kp.appendChild(b)});
        const d=el('button','key done','Done ✓');d.type='button';d.onclick=()=>press('done');kp.appendChild(d);panel().appendChild(kp);
        keyHandler=e=>{if(/^[0-9]$/.test(e.key))press(e.key);else if(e.key===sep)press(sep);else if(e.key==='Backspace')press('⌫');else if(e.key==='Enter')press('done')};
      }else if(k==='payto'||k==='memo'){
        tip.textContent=k==='payto'?'Type the name exactly as it appears on the bill.':'Optional. A few words on what it\'s for.';
        const row=el('div','textrow');const inp=el('input','textin');inp.id='tin-'+k;inp.maxLength=34;inp.autocomplete='off';inp.spellcheck=false;inp.value=V[k];inp.setAttribute('aria-label',FIELD_NAME[k]);
        inp.addEventListener('input',()=>{V[k]=inp.value;render(k)});inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();next(k)}});
        row.appendChild(inp);btn('Done ✓','primary',()=>next(k),row);panel().appendChild(row);
        if(matchMedia('(pointer:fine)').matches)setTimeout(()=>inp.focus({preventScroll:true}),30);
      }else if(k==='words'){
        tip.textContent='Tap the words in order. Then draw a line through the empty space on the check.';
        const tw=el('div','tiles');
        tiles.forEach(t=>{const b=el('button','tile',t);b.type='button';b.onclick=()=>{if(V.words.length<12){V.words.push(t);sfx.key();render('words')}};tw.appendChild(b)});
        const bk=el('button','tile ctl','⌫');bk.type='button';bk.setAttribute('aria-label','Remove last word');bk.onclick=()=>{V.words.pop();sfx.key();render('words')};tw.appendChild(bk);
        const dn=el('button','tile ctl go','Done ✓');dn.type='button';dn.onclick=()=>next('words');tw.appendChild(dn);
        panel().appendChild(tw);
        keyHandler=e=>{if(e.key==='Backspace'){V.words.pop();render('words')}else if(e.key==='Enter')next('words')};
      }
      if(k==='sig'){const r=actsRow();btn('Clear signature','ghost',()=>{clearInk(x=>x.z==='sig');sfx.key()},r)}
      render(k);
      const ho=btn('Hand it over →','white',handOver,fc);ho.classList.add('handover');
      if(k==='sig')keyHandler=e=>{if(e.key==='Enter')handOver()};
    }
    setInk('m1');
    zoneAt=p=>{const z=zones();if(inR(p,z.sig))return'sig';if(inR(p,z.words))return'line';return null};
    onTap=k=>{if(k&&ORDER.includes(k))select(k);else camReset()};
    onStrokeEnd=st=>{
      if(st.z==='sig'){
        const m=missingReq();
        if(m.length){clearInk(x=>x.z==='sig');miss();say(`<b>Hold up.</b> You just signed a check that's missing the ${m.map(x=>FIELD_NAME[x].toLowerCase()).join(', ')}. A signed blank check is a blank check for whoever finds it. Sign last.`);select(m[0])}
        else if(sel!=='sig')select('sig');
      }
    };
    say(idx===0?'Copy the bill onto the check. <b>Tap any line</b> to fill it, or tap blank paper to see the whole check. Starting you on the date.':idx===1?'Bigger number this time. Same moves.':'Last one. Eyes on the details.');
    select('date');
    async function handOver(){
      setInk(null);hideGuide();clearPanel();document.querySelectorAll('.fld.sel').forEach(x=>x.classList.remove('sel'));camReset();await wait(RM?0:560);
      const secs=(performance.now()-t0)/1000;
      const R=inspect(s,V);
      mood('alert',900);await say('Inspecting…');
      let good=0;
      for(let i=0;i<R.length;i++){const r=R[i];await wait(RM?0:260);sfx.scan(i);mark(r.k,r.ok===true?'ok':r.ok===false?'no':'meh');if(r.ok===true){good++;hit(FK(r.k),true);award(r.xp||100,FK(r.k))}else if(r.ok===false)miss(true)}
      const wrong=R.filter(r=>r.ok===false);
      let bonus=0;if(!wrong.length){bonus=Math.max(0,Math.round((100-secs)*4));if(bonus)award(bonus,$('check'),'Speed')}
      await wait(250);
      if(!wrong.length){stamp('Paid',true,'Vault Bank');sfx.win();mood('happy',2000)}else{stamp('Void',false,'Fix & rewrite');sfx.bad();mood('oops',1500)}
      await wait(450);
      clearPanel();
      if(wrong.length){const ul=el('ul','fixes');R.filter(r=>r.ok!==null).forEach(r=>{const li=el('li');li.tabIndex=0;li.title='Zoom to this line';li.onclick=()=>focusToggle(FK(r.k));li.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();focusToggle(FK(r.k))}};li.appendChild(el('span','dot '+(r.ok?'ok':'no'),r.ok?'✓':'✕'));const tx=el('span');tx.appendChild(el('b',null,FIELD_NAME[r.k]+' '));tx.appendChild(document.createTextNode(r.msg));li.appendChild(tx);ul.appendChild(li)});panel().appendChild(ul);panel().appendChild(el('div','hint','Tap a fix to zoom in on that line'))}
      await say(!wrong.length?`Every line clean. Elite behavior.${bonus?' Speed bonus added.':''}`:`${good} of ${R.filter(r=>r.ok!==null).length} lines clean. Here's what would get this check bounced or misused:`);
      await waitButton(idx<M1.length-1?'Next bill →':'Mission complete →','primary big');
      resolve();
    }
  });
}
function inspect(s,V){
  const R=[];const dateR={k:'date'};
  if(!V.date){dateR.ok=false;dateR.msg='Blank. A check needs the date you write it.'}
  else{const m=V.date.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);if(!m){dateR.ok=false;dateR.msg=`Write it as month/day/year, like ${fmtDate(today)}.`}else{let y=+m[3];if(y<100)y+=2000;const dt=new Date(y,+m[1]-1,+m[2],12);if(dt.getFullYear()===today.getFullYear()&&dt.getMonth()===today.getMonth()&&dt.getDate()===today.getDate()){dateR.ok=true;dateR.msg='Dated today.'}else if(dt>today){dateR.ok=false;dateR.msg='Postdated. A future date doesn\'t reliably hold a check. The bank can cash it early. Use today\'s date.'}else{dateR.ok=false;dateR.msg=`That's not today. Date it the day you write it: ${fmtDate(today)}.`}}}
  R.push(dateR);
  const p={k:'payto'};const nv=norm(V.payto);
  if(!nv){p.ok=false;p.msg='Blank payee. Anyone could write their own name in.'}
  else if(nv===norm(s.payee)){p.ok=true;p.msg='Exact name.'}
  else if(nv==='cash'){p.ok=false;p.msg='Made out to "Cash," anyone holding it can cash it. Lose it and the money\'s gone.'}
  else if(norm(s.payee).includes(nv)){p.ok=false;p.msg=`Too short. Use the full name: ${s.payee}.`}
  else{p.ok=false;p.msg=`Doesn't match the bill. It should say ${s.payee}.`}
  R.push(p);
  const a={k:'amt'};const av=parseFloat(V.amt);
  if(!V.amt){a.ok=false;a.msg='Empty amount box.'}else if(Math.abs(av-s.amt)<.001){a.ok=true;a.msg='Matches the bill.'}else{a.ok=false;a.msg=`The bill says $${money(s.amt)}. You wrote $${isNaN(av)?V.amt:money(av)}.`}
  R.push(a);
  const wr={k:'words'};const got=V.words.join(' ').toLowerCase(),want=wordTokens(s.amt).join(' ');
  if(!got){wr.ok=false;wr.msg='No amount in words. Banks rely on this line most.'}
  else if(got===want){wr.ok=true;wr.msg='Perfect.'}
  else if(/dollars|cents|point/.test(got)||!/\/100$/.test(got)){wr.ok=false;wr.msg=`End with the cents as a fraction and skip "dollars," "cents," and "point." It should read: ${words(s.amt)}.`}
  else{wr.ok=false;wr.msg=`Doesn't match the box. When the two disagree, banks usually go with the words. It should read: ${words(s.amt)}.`}
  R.push(wr);
  const lo={k:'line',xp:60};const fr=rectIn(F('words')),vr=rectIn(F('words').querySelector('.v'));const textEnd=got?vr.x+vr.w:fr.x;const tail=fr.x+fr.w-textEnd;
  const ls=strokes.filter(x=>x.z==='line');
  if(tail<fr.w*.1){lo.ok=true;lo.msg='No empty space left to fill.'}
  else{const covered=ls.some(x=>{const xs=P(x).map(q=>q.x);return Math.max(...xs)-Math.max(Math.min(...xs),textEnd-12)>=tail*.5&&Math.max(...xs)>textEnd});lo.ok=covered;lo.msg=covered?'Empty space lined out.':'The space after your words is open. Someone could add "thousand." Draw a line through it.'}
  R.push(lo);
  const me={k:'memo'};if(V.memo.trim()){me.ok=true;me.msg='Receipt trail locked in.';me.xp=40}else{me.ok=null;me.msg='Optional.'}
  R.push(me);
  const sg={k:'sig'};const z=rectIn(F('sig'));const q=sigQuality(strokes.filter(x=>x.z==='sig'),{x:z.x,y:z.y-z.h*.7,w:z.w,h:z.h*1.85});
  if(q.none){sg.ok=false;sg.msg='Unsigned. A check isn\'t valid until you sign it.'}else if(!q.ok){sg.ok=false;sg.msg=q.span<.28?'Too small to count. Sign your full name.':'Keep the signature on the signature line.'}else{sg.ok=true;sg.msg='Signed, last, on the line.';sg.xp=150}
  R.push(sg);
  return R;
}

/* ================= MISSION 2 ================= */
const M2=[
  {payer:'Northside Grocers',addr:'Payroll · 88 Commerce Dr',amt:412.68,memo:'Pay period 10/12–10/25',sit:'Payday. You\'re standing at the <b>bank counter</b> and want cash.',act:'Hand it to the teller',ok:'blank'},
  {payer:'Coach Dana Reyes',addr:'Youth League Referee Fund',amt:60,memo:'Ref fees · 3 games',sit:'You\'ll drop this in the <b>ATM</b> on the way home tonight.',act:'Head to the ATM',ok:'deposit'},
  {payer:'Lou Bennett',addr:'14 Elm Ct',amt:100,memo:'Happy birthday!',sit:'Birthday money. You\'re depositing it with your <b>bank\'s app</b>.',act:'Snap it in the app',ok:'mobile'}
];
const PHRASES={deposit:'For deposit only',mobile:'For mobile deposit only\nat Vault Bank',sam:'Pay to the order of\nSam Ortiz'};
const PHRASE_LABEL={deposit:'"For deposit only"',mobile:'"For mobile deposit only at Vault Bank"',sam:'"Pay to the order of Sam Ortiz"'};
function outcome(r,phrase,q,below){
  if(q.none)return{ok:false,t:'Not endorsed',m:r.ok==='mobile'?'The app rejects it. There\'s no signature on the back.':'The bank can\'t take it. A check made out to you needs your signature on the back.'};
  if(below)return{ok:false,t:'Processing delay',m:'Ink landed below the line. That space is for the bank\'s processing stamps, and writing there can hold up your money.'};
  if(!q.ok)return{ok:false,t:'Can\'t read it',m:q.span<.28?'That\'s initials, not a signature. Sign your full name.':'Keep your signature inside the endorsement strip.'};
  if(phrase==='sam')return{ok:false,t:'Signed it away',m:'"Pay to the order of Sam Ortiz" signs the check over to Sam. That\'s a special endorsement, and now it\'s Sam\'s money, not yours.'};
  if(r.ok==='blank'){
    if(!phrase)return{ok:true,t:'Cash in hand',m:'Signature only is a <b>blank endorsement</b>. Fine here because you signed it right at the counter and handed it straight over.'};
    if(phrase==='deposit')return{ok:false,t:'No cash for you',m:'The teller can\'t hand you cash. "For deposit only" locks it into your account. Safe, but not what you wanted today.'};
    return{ok:false,t:'Wrong wording',m:'That wording is for app deposits. At the counter, the teller will ask you to fix it or deposit it instead of cashing it.'};
  }
  if(r.ok==='deposit'){
    if(phrase==='deposit')return{ok:true,t:'Locked & deposited',m:'<b>"For deposit only"</b> is a restrictive endorsement. If it fell out of your pocket, nobody could cash it. It can only go into an account.'};
    if(!phrase)return{ok:false,t:'Lost on the way',m:'It slipped out of your hoodie on the walk to the ATM. Someone found it and cashed it, because a check with just a signature works for whoever holds it. Lock it with "For deposit only."'};
    return{ok:false,t:'Wrong wording',m:'That\'s app wording. For the ATM, "For deposit only" is the move.'};
  }
  if(phrase==='mobile')return{ok:true,t:'Deposit accepted',m:'Most banks require <b>mobile-deposit wording</b> on the back. Look up your bank\'s exact phrase in its app. Keep the paper check until the money clears.'};
  if(phrase==='deposit')return{ok:false,t:'App rejected it',m:'Close, but many banks reject app deposits that don\'t say "For mobile deposit only" plus the bank name. Run it back.'};
  return{ok:false,t:'App rejected it',m:'Many banks reject app deposits without mobile-deposit wording on the back. Run it back.'};
}
async function mission2(){
  await brief(2,'Flip & Endorse','Now you\'re getting paid. Flip each check, endorse it for the situation, and see what happens.',[['Swipe up','on the check to flip it'],['Stamp','a line if you need one'],['Sign','in the top strip']]);
  for(let i=0;i<M2.length;i++){
    const r0=M2[i];pips(M2.length,i);
    blankCheck({holder:r0.payer,addr:r0.addr,no:5310+i*17});
    setF('date',fmtDate(addDays(-2)),false);setF('payto',S.name,false);setF('amt',money(r0.amt),false);setF('words',words(r0.amt)+' ————',false);setF('memo',r0.memo,false);
    F('sig').querySelector('.v').innerHTML=sigSVG(r0.payer,i+3);
    await enterCheck();
    await say(r0.sit+' Your name is on the pay line, so it\'s yours to endorse. <b>Swipe up on the check to flip it.</b>');
    await frontPhase();
    let tries=0,res;
    for(;;){tries++;res=await backPhase(r0,tries);if(res.ok)break}
    clearPanel();await exitCheck($('back'));
  }
}
function frontPhase(){
  return new Promise(res=>{
    clearPanel();const c=$('check');let done=false;
    const flip=async()=>{if(done)return;done=true;setInk(null);c.style.transform='';clearPanel();c.classList.add('flipout');sfx.whoosh();await wait(RM?10:240);c.hidden=true;c.classList.remove('flipout');clearInk();res()};
    const r=actsRow();btn('Flip it ↻','dark',flip,r);panel().appendChild(el('div','hint','Swipe up on the check, tap Flip, or press F'));
    keyHandler=e=>{if(e.key==='f'||e.key==='F')flip()};
    setInk('m2front');
    const cr=rectIn(c);zoneAt=p=>inR(p,cr)?'front':null;
    onDrag=(a,p,phase)=>{if(phase==='end'){c.style.transform='';return}const dy=p.y-a.y,dx=p.x-a.x;if(Math.abs(dy)>Math.abs(dx)*1.2&&dy<0){c.style.transform=`perspective(900px) rotateX(${Math.min(-dy/2,40)}deg)`;if(dy<-70){flip();return'consume'}return'consume'}};
    onStrokeEnd=st=>{if(strokeLen(st)>30){clearInk();miss();say('<b>Not on the front.</b> That signature line belongs to the person paying you. Your signature goes on the back. Swipe up to flip it.')}};
    onTap=()=>{};
  });
}
function backPhase(r0,tries){
  return new Promise(async res=>{
    const b=$('back');$('endText').textContent='';clearInk();clearMarks();
    if(b.hidden||tries===1){b.hidden=false;b.classList.remove('flipin');void b.offsetWidth;b.classList.add('flipin');await wait(RM?10:600);b.classList.remove('flipin')}
    sizeInk();focusOn($('endZone'),{padX:.06,padY:.45,maxS:2.1});
    await say(tries===1?'Back side, turned sideways. The <b>top strip</b> is the only place you endorse. Stamp a line if this situation needs one, then sign.':'Run it back. Same check, new endorsement.');
    let phrase=null;
    const ez=()=>rectIn($('endZone'));const floor=()=>rectIn($('doNot')).y;
    setInk('m2back');zoneAt=()=>'back';onTap=()=>{};onStrokeEnd=()=>{};
    showGuide(ez,'Endorse here');
    clearPanel();
    const fc=el('div','focus');fc.appendChild(el('span','label','The move'));fc.appendChild(el('span','val',r0.act));const tip=el('span','tip');tip.innerHTML=r0.sit;fc.appendChild(tip);panel().appendChild(fc);
    const tw=el('div','tiles');
    const place=k=>{phrase=phrase===k?null:k;$('endText').textContent=phrase?PHRASES[phrase]:'';[...tw.children].forEach(x=>{if(x.dataset&&x.dataset.k)x.classList.toggle('go',x.dataset.k===phrase)});if(phrase){sfx.stamp();burstAt($('endText'),12)}else sfx.key()};
    tw.appendChild(el('span','label','Stamp a line (optional):'));
    ['deposit','mobile','sam'].forEach(k=>{const t=el('button','tile ctl',PHRASE_LABEL[k]);t.type='button';t.dataset.k=k;t.onclick=()=>place(k);tw.appendChild(t)});
    panel().appendChild(tw);
    const r=actsRow();
    btn('Erase','ghost',()=>{clearInk();phrase=null;$('endText').textContent='';[...tw.children].forEach(x=>x.classList&&x.classList.remove('go'));sfx.key()},r);
    btn(r0.act+' →','primary',go,r);
    panel().appendChild(el('div','hint','Draw your signature in the dashed box'));
    keyHandler=e=>{if(e.key==='Enter')go()};
    async function go(){
      setInk(null);hideGuide();keyHandler=null;
      const z=ez();const fl=floor();const below=strokes.some(s=>P(s).some(p=>p.y>fl));
      const q=sigQuality(strokes,{x:z.x,y:z.y,w:z.w,h:z.h+6});
      const o=outcome(r0,phrase,q,below);camReset();
      clearPanel();
      const box=el('div','outcome');box.innerHTML=`<span class="tag ${o.ok?'ok':'no'}">${esc(o.t)}</span><br>${o.m}`;panel().appendChild(box);
      if(o.ok){hit($('endZone'));award(tries===1?320:140,$('endZone'));stamp(r0.ok==='blank'?'Cashed':'Deposited',true,'Vault Bank');mood('happy',2000);say(tries===1?'First try. You just entered rare air.':'Locked in. Now you know why.');await waitButton('Next check →')}
      else{miss();stamp('Denied',false,o.t);say('Not this time, but now you know. That\'s the whole point.');await waitButton('Run it back','white big')}
      res({ok:o.ok});
    }
  });
}

/* ================= MISSION 3 ================= */
const PAYERS=[['Riverside Diner','402 Front St'],['Maya Chen','77 Laurel Ave'],['Brightline Tutoring','Suite 210, 9 Park Pl'],['D. Okafor','1530 Ridge Rd'],['Summit Lawn Care','PO Box 118'],['T. Alvarez','6 Birch Ln'],['Cityside Cinemas','Payroll Dept'],['Grace Kim','220 Oak St']];
const OTHERS=['Jordan Blake','Priya Nair','Chris Dunn','Taylor Brooks','Sam Ortiz'];
const FLAGS={
  payee:{at:['payto'],why:c=>`Made out to ${c.payto}. Only the person on the pay line can endorse it. Never sign someone else's check.`},
  mismatch:{at:['amt','words'],why:()=>'Box and words don\'t match. Banks usually go with the words, which can short you. Ask for a new check.'},
  unsigned:{at:['sig'],why:()=>'No payer signature. It isn\'t a valid check until the payer signs it. Hand it back.'},
  stale:{at:['date'],why:()=>'Dated more than six months ago. Banks can refuse stale checks.'},
  overpay:{at:['sticky','amt'],why:()=>'Overpayment scam. Real buyers don\'t overpay and ask for the difference back. The check bounces after you\'ve already sent your money.'}
};
function makeRush(){
  const kinds=['clean','payee','clean','mismatch','unsigned','clean','overpay','stale','clean','payee','mismatch','clean'];
  const list=kinds.slice(0,2).concat(shuffle(kinds.slice(2)));
  return list.map((k,i)=>{
    const[payer,addr]=PAYERS[i%PAYERS.length];const amt=Math.round(rnd(20,480))+pick([0,.25,.5,.75,0]);
    const c={k,payer,addr,amt,payto:S.name,date:fmtDate(addDays(-Math.round(rnd(1,25)))),words:words(amt),signed:true,sticky:null,no:7000+i*13};
    if(k==='payee')c.payto=pick(OTHERS);
    if(k==='mismatch'){const[d]=splitAmt(amt);c.words=words(transpose(d)+(amt-d))}
    if(k==='unsigned')c.signed=false;
    if(k==='stale')c.date=fmtDate(addMonths(-8));
    if(k==='overpay'){c.amt=1500;c.words=words(1500);c.payer='R. Mendez';c.addr='Marketplace buyer';c.sticky='Sent $1,500 for the $300 bike. Send the extra $1,200 back in gift cards. Thx!'}
    if(k==='clean'&&Math.random()<.35)c.sticky=pick(['Thanks for babysitting!','For the yard work. Great job!','Thanks for the tutoring.']);
    return c});
}
const NAMES={payto:'pay line',amt:'amount box',words:'amount in words',sig:'payer signature',date:'date',sticky:'note',memo:'memo',holder:'payer info',micr:'bank numbers'};
async function mission3(){
  await brief(3,'Teller Rush','You\'re behind the counter now. Clean check? Deposit it. Something off? Tap the exact problem on the check. Three misses and the vault locks.',[['Deposit','if it\'s clean (E or →)'],['Tap','the problem to send it back'],['Scan','name · amounts · signature · date · story']]);
  S.lives=3;setLives(true);$('stage').classList.add('teller');$('queueCard').hidden=false;
  const q=makeRush();
  for(let i=0;i<q.length;i++){
    const c=q[i];pips(q.length,i);$('queueTxt').textContent=`#${String(i+1).padStart(3,'0')} · ${q.length-i-1} in line`;
    blankCheck({holder:c.payer,addr:c.addr,no:c.no,sticky:c.sticky});
    setF('date',c.date,false);setF('payto',c.payto,false);setF('amt',money(c.amt),false);setF('words',c.words+' ——',false);setF('memo','',false);
    F('sig').querySelector('.v').innerHTML=c.signed?sigSVG(c.payer,i+11):'';
    await enterCheck();
    if(i===0)say(`This one's for <b>${esc(S.name)}</b>. Scan it: your name, amounts match, signed, recent. Clean? Deposit.`);
    else if(i===1)say('Now look closer. If something\'s wrong, <b>tap the exact spot</b> on the check.');
    else say(pick(['Next.','Scan it.','Keep moving.','Eyes sharp.','Another one.']));
    const secs=i<2?14:Math.max(5,10-(i-2)*.5);
    const v=await new Promise(res=>{
      clearPanel();let done=false;const ck=$('check');ck.classList.add('tappable');
      const fin=(kind,k)=>{if(done)return;done=true;stopTimer();keyHandler=null;ck.classList.remove('tappable');ck.onclick=null;res({kind,k})};
      ck.onclick=e=>{const f=e.target.closest('[data-f]');if(f)fin('tap',f.dataset.f)};
      const r=actsRow();btn('Deposit ✓','primary big',()=>fin('deposit'),r);
      panel().appendChild(el('div','hint','Something wrong? Tap it on the check. Keys: E or → to deposit'));
      keyHandler=e=>{const k=e.key.toLowerCase();if(k==='e'||k==='arrowright')fin('deposit')};
      startTimer(secs,()=>fin('time'));
    });
    clearPanel();
    const bad=c.k!=='clean';const fl=bad?FLAGS[c.k]:null;
    let right=false,msg='';
    if(v.kind==='deposit'){right=!bad;msg=bad?fl.why(c):''}
    else if(v.kind==='tap'){if(bad&&fl.at.includes(v.k)){right=true;msg='Good catch. '+fl.why(c)}else if(bad){msg=`The ${NAMES[v.k]||'spot'} you tapped is fine. The real problem: ${fl.why(c)}`}else{msg=`Nothing wrong with the ${NAMES[v.k]||'spot'} you tapped. This one was clean: your name, matching amounts, signed, recent.`}}
    else{msg=bad?fl.why(c):'Clock ran out on a clean check. Your name, matching amounts, signed, recent. Deposit it.'}
    if(bad)fl.at.forEach(k=>ring(k));
    if(right){
      hit(bad?F(v.k):$('check'));award(130+Math.round(timeLeft()*15)+(bad?60:0),bad?F(v.k):$('check'));
      stamp(bad?'Returned':'Deposited',true,bad?'Caught it':'Vault Bank');
      if(bad){await say(msg);await wait(1900)}else{say(pick(['Clean read.','Elite behavior.','Locked in.','Smooth.']));await wait(800)}
    }else{
      miss();S.lives--;setLives(true);
      stamp(v.kind==='time'?'Too slow':'Wrong call',false,bad?'Missed it':'It was clean');
      await say((v.kind==='time'?'<b>Time.</b> ':'')+esc(msg));
      await waitButton('Got it →','white');
    }
    await exitCheck();
    if(S.lives<=0){await say('Vault locked. Setbacks are just setups. Run it back.');await wait(1000);break}
  }
  $('stage').classList.remove('teller');$('queueCard').hidden=true;
}

/* ================= RUN ================= */
async function run(start=1){
  Object.assign(S,{xp:0,shownXP:0,streak:0,right:0,total:0,lives:3,mxp:{}});$('xp').textContent='0';$('xpFill').style.width='0';$('rankTxt').textContent=RANKS[0][1];$('streak').classList.remove('on');
  show(null);sizeInk();
  const MS=[null,mission1,mission2,mission3];
  for(let m=start;m<=3;m++){await MS[m]();PROG.unlocked=Math.max(PROG.unlocked,Math.min(m+1,3));PROG.best[m]=Math.max(PROG.best[m]||0,S.mxp[m]||0);saveProg()}
  stopTimer();clearPanel();setLives(false);pips(0,0);bill(null);setMission(4);
  const acc=S.total?Math.round(S.right/S.total*100):0;const newBest=S.xp>S.best;if(newBest){S.best=S.xp;try{localStorage.setItem('inkit-best',S.best)}catch(e){}}
  const rank=rankOf(S.xp);
  $('badge').innerHTML=badgeSVG(rank);
  $('eRank').textContent=rank;countUp($('eXP'),S.xp,1100);$('eAcc').textContent=acc+'%';$('eBest').textContent=S.best.toLocaleString('en-US');
  $('eEyebrow').textContent=newBest?'New personal best':'Run complete';
  $('eGrade').textContent=acc>=95?'S':acc>=85?'A':acc>=70?'B':'C';
  const bd=$('breakdown');bd.innerHTML='';for(let m=start;m<=3;m++){const row=el('div','bd-row glass');row.appendChild(el('span','label',MNAMES[m]));row.appendChild(el('b',null,(S.mxp[m]||0).toLocaleString('en-US')+' XP'));bd.appendChild(row)}
  renderSelect();
  say(newBest?'You just entered rare air. '+rank+'.':'Run complete. '+rank+'. The top doesn\'t look far from here.');mood('happy',2500);
  show('scrEnd');sfx.win();burst(innerWidth/2,innerHeight*.3,70);
  emit('complete',{xp:S.xp,rank,accuracy:acc});
}
function emit(event,data){try{if(window.parent!==window)window.parent.postMessage(Object.assign({source:'moneybot-ink-it',event},data||{}),'*')}catch(e){}}
function countUp(node,to,ms=900){const t0=performance.now();const f=t=>{const k=Math.min((t-t0)/ms,1),e=1-Math.pow(1-k,3);node.textContent=Math.round(to*e).toLocaleString('en-US');if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
/* mission select */
let SEL=1;
const MNAMES=['','Cut the check','Flip & endorse','Teller rush'];
const MICONS={1:'<path d="M4 20l4-1 11-11-3-3L5 16z"/>',2:'<path d="M4 9a8 8 0 0 1 14-3l2 2"/><path d="M20 15a8 8 0 0 1-14 3l-2-2"/>',3:'<path d="M3 10l9-6 9 6"/><path d="M5 10v8M12 10v8M19 10v8"/>'};
function renderSelect(){const box=$('mSelect');box.innerHTML='';for(let n=1;n<=3;n++){const locked=n>PROG.unlocked;const b=el('button','mchip glass'+(n===SEL?' sel':'')+(locked?' locked':''));b.type='button';b.setAttribute('role','radio');b.setAttribute('aria-checked',String(n===SEL));b.disabled=locked;
  b.innerHTML=`<i><svg viewBox="0 0 24 24">${locked?'<rect x="6" y="11" width="12" height="9" rx="2"/><path d="M9 11V8a3 3 0 0 1 6 0v3"/>':MICONS[n]}</svg></i><span><b>${MNAMES[n]}</b><small>${locked?'Locked':PROG.best[n]?'Best '+PROG.best[n].toLocaleString('en-US')+' XP':n===1?'Start here':'Unlocked'}</small></span>`;
  b.onclick=()=>{SEL=n;renderSelect();sfx.key()};box.appendChild(b)}
  $('startBtn').textContent=SEL===1?'Start the run':`Start at mission ${SEL}`}
{const hm=/^#m([123])$/.exec(location.hash);if(hm&&+hm[1]<=PROG.unlocked)SEL=+hm[1]}
renderSelect();
/* pause menu */
let pausedKH=null;
function openPause(){if(!$('scrPause').hidden)return;pauseTimer();pausedKH=keyHandler;keyHandler=e=>{if(e.key==='Escape')closePause()};$('pSound').textContent='Sound: '+(MUTED?'Off':'On');$('pRestart').hidden=!(curMission>=1&&curMission<=3);$('scrPause').hidden=false;$('pResume').focus()}
function closePause(){$('scrPause').hidden=true;keyHandler=pausedKH;pausedKH=null;resumeTimer()}
$('pauseBtn').onclick=openPause;$('pResume').onclick=closePause;
$('pSound').onclick=()=>{MUTED=!MUTED;PROG.sound=!MUTED;saveProg();$('pSound').textContent='Sound: '+(MUTED?'Off':'On');if(!MUTED){audio();sfx.good()}};
$('pRestart').onclick=()=>{location.hash='m'+curMission;location.reload()};
$('pQuit').onclick=()=>{location.hash='';location.reload()};
function startFromTitle(){emit('start');const n=$('nameIn').value.trim().replace(/\s+/g,' ');S.name=n||'Alex Rivera';audio();run(SEL)}
$('startBtn').onclick=startFromTitle;
$('nameIn').addEventListener('keydown',e=>{if(e.key==='Enter')startFromTitle()});
$('againBtn').onclick=()=>{audio();run(1)};
if(S.best)$('bestLine').textContent='Your best: '+S.best.toLocaleString('en-US')+' XP';
say('Your financial glow-up starts now. Sign in and start the run.');
sizeInk();
})();
