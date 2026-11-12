const {chromium}=require('playwright');
const BOT=`window.bot=function(o){const T=__T,p=T.p,dt=1/30;T.paused=true;T.cam=0;
  T.restart();T.setRace(0);if(o.an!==undefined)T.an.type=o.an;T.start(o.w);if(o.el!==undefined)T.setEl(o.el);T.dead=false;
  const R={w:o.w,el:o.el,t:0,kills:0,lv:1,dmgIn:{},ttk:null};let tick=0,pi=0,ct=0;
  const ranged=[3,6,9].includes(o.w),des=o.w==3?8:o.w==6?7:o.w==9?6:o.w==4?2.6:1.5;
  const pats={0:['bl','bl','bl','bh'],1:['bl','bl','bh','bl','bl','bl'],2:['bl','bl','bl','bh'],3:['bl','bl','bl','br','bs'],4:['bs','bs','bs','bh','bl'],5:['bs','bl','bl','bl','bh'],6:['bs','bh','bl','bs'],7:['bl','bl','bs','bh'],8:['bl','bl','bl','bh','bh','bl'],9:['bl','bh','bs','bl']};
  const pat=pats[o.w];
  if(o.mode!='surv'){T.E.forEach(e=>e.hp=0);T.upd(dt);T.E.length&&T.E.splice(0);}
  let tgt=null;if(o.mode=='boss'||o.mode=='big'||o.mode=='pack'){T.E.forEach(e=>{e.hp=0});for(let i=0;i<3;i++)T.upd(dt);
     if(o.mode=='pack'){for(let i=0;i<8;i++){const e=T.spawn('n');e.x=p.x+Math.cos(i)*4;e.z=p.z+Math.sin(i)*4}}else{tgt=T.spawn(o.mode=='boss'?'B':'b');tgt.x=p.x;tgt.z=p.z+7}}
  const cap=o.cap||600;
  while(R.t<cap){
    if(o.mode!='surv'){p.hp=100;T.LT=1;T.sp=99;T.bsp=99;if(o.mode=='pack'?T.E.length==0:tgt.hp<=0||T.E.indexOf(tgt)<0){R.ttk=+R.t.toFixed(1);break}}
    if(T.dead){break}
    let q=null,bd=1e9;for(const e of T.E){if(e.hp<=0)continue;const d=Math.hypot(e.x-p.x,e.z-p.z);if(d<bd){bd=d;q=e}}
    let mx=0,mz=0;if(q){const dx=q.x-p.x,dz=q.z-p.z,d=bd||.01;if(d>des+.5){mx=dx/d;mz=dz/d}else if(ranged&&d<des-2.5){mx=-dx/d;mz=-dz/d}}
    T.J.x=mx;T.J.z=mz;
    if(o.mode=='surv'){for(const e of T.E){if(e.wind>0&&Math.hypot(e.x-p.x,e.z-p.z)<(e.rng?0:2.8)&&p.dcd<=0&&Math.random()<.5){T.dodge();break}}
      if(p.hp<35&&T.IT[0].c>0)T.useIt(0)}
    ct-=dt;if(q&&ct<=0&&bd<(ranged?24:des+2.5)){p[pat[pi%pat.length]]=.25;pi++;ct=.2}
    const h0=p.hp;T.upd(dt);if(p.hp<h0&&!T.dead){const k=window.__LA||'?';R.dmgIn[k]=(R.dmgIn[k]||0)+(h0-p.hp)}
    if(p.hp<=0&&!T.dead){T.dead=true}
    R.t+=dt;tick++}
  R.t=+R.t.toFixed(1);R.kills=T.kills;R.lv=T.LV;for(const k in R.dmgIn)R.dmgIn[k]=Math.round(R.dmgIn[k]);T.J.x=T.J.z=0;return R}`;
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});const pg=await b.newPage({viewport:{width:320,height:240}});const N=__dirname+'/node_modules/';
await pg.route(/three\.min\.js/,q=>q.fulfill({path:N+'three/build/three.min.js'}));await pg.route(/peerjs\.min\.js/,q=>q.fulfill({path:N+'peerjs/dist/peerjs.min.js'}));
const errs=[];pg.on('pageerror',e=>errs.push(e.message));
await pg.addInitScript(()=>localStorage.setItem('arena_set',JSON.stringify({cm:0,sh:0,ol:0,gr:0,fx:0})));
await pg.goto('file://'+__dirname+'/lab.html#dbg');await pg.waitForTimeout(1500);await pg.evaluate(BOT);
const NAMES=['Espada e Escudo','Espada Longa','Dois Machados','Arco','Lança+Urso','Adagas','Mago','Paladino','Pugilista','Necromante'];
const builds=[0,1,2,3,4,5,[6,0],[6,1],[6,2],[6,3],7,8,9];const ELN=['Fogo','Gelo','Sombra','Ilusão'];
const out=[];
for(const bd of builds){const w=Array.isArray(bd)?bd[0]:bd,el=Array.isArray(bd)?bd[1]:undefined,nm=NAMES[w]+(el!==undefined?' ('+ELN[el]+')':'');
  const row={nome:nm};
  for(const m of ['boss','big','pack']){const r=await pg.evaluate(a=>bot(a),{w,el,mode:m,cap:120});row[m]=r.ttk}
  const sv=[];for(let k=0;k<3;k++)sv.push(await pg.evaluate(a=>bot(a),{w,el,mode:'surv',cap:600}));
  row.sobrevive=+(sv.reduce((a,r)=>a+r.t,0)/3).toFixed(0);row.abates=+(sv.reduce((a,r)=>a+r.kills,0)/3).toFixed(0);row.nivel=+(sv.reduce((a,r)=>a+r.lv,0)/3).toFixed(1);
  const di={};sv.forEach(r=>{for(const k in r.dmgIn)di[k]=(di[k]||0)+r.dmgIn[k]/3});row.dano=Object.fromEntries(Object.entries(di).map(([k,v])=>[k,Math.round(v)]));
  out.push(row);console.log(JSON.stringify(row))}
require('fs').writeFileSync(__dirname+'/lab-result.json',JSON.stringify(out,null,1));console.log(errs.slice(0,5).join('|')||'no errors');await b.close()})();
