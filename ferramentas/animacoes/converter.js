// converte as animações do KayKit para o esqueleto dos heróis; argv[2]=lista json, argv[3]=saída
const {chromium}=require('playwright'),fs=require('fs');(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader','--no-proxy-server']});const pg=await b.newPage({viewport:{width:1600,height:320}});pg.on('pageerror',e=>console.log('ERR',e.message));
await pg.goto('http://127.0.0.1:8779/rt.html');await pg.waitForFunction(()=>window.conv);const list=JSON.parse(fs.readFileSync(process.argv[2]));
const out=await pg.evaluate(([l,B])=>conv(l,B),Array.isArray(list)?[list,null]:[list.list,list.B]);fs.writeFileSync(process.argv[3],out);const o=JSON.parse(out);for(const k in o)console.log(k,o[k].err||('d='+o[k].d+' n='+o[k].n+' i='+JSON.stringify(o[k].i)));
if(process.argv[4]){for(const k of process.argv[4].split(',')){const c=o[k];const ts=[0,.2,.4,.6,.8,1].map(f=>+(f*c.d).toFixed(2));await pg.evaluate(([cj,k,ts])=>prev(cj,k,ts),[out,k,ts]);await pg.screenshot({path:'kk/prev_'+k+'.png'})}}
await b.close()})();
