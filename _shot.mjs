import { spawn } from "child_process"; import fs from "fs";
const E="C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", T=process.env.TEMP;
const p=spawn(E,["--headless=new","--disable-gpu","--remote-debugging-port=9349","--user-data-dir="+T+"/edgeprof19","about:blank"],{stdio:"ignore"});
const sleep=ms=>new Promise(r=>setTimeout(r,ms)); let tg;
for(let i=0;i<30;i++){try{tg=await(await fetch("http://127.0.0.1:9349/json")).json();if(tg.find(t=>t.type==="page"))break}catch{}await sleep(500)}
const ws=new WebSocket(tg.find(t=>t.type==="page").webSocketDebuggerUrl); await new Promise(r=>ws.onopen=r);
let id=0; const pend={}; const send=(m,pr={})=>new Promise(r=>{const i=++id;pend[i]=r;ws.send(JSON.stringify({id:i,method:m,params:pr}))});
ws.onmessage=e=>{const m=JSON.parse(e.data); if(m.id&&pend[m.id])pend[m.id](m.result); if(m.method==="Runtime.exceptionThrown")console.log("EXC",m.params.exceptionDetails.exception?.description); if(m.method==="Runtime.consoleAPICalled"&&["error","warning"].includes(m.params.type))console.log("CONSOLE."+m.params.type,m.params.args.map(a=>a.value||a.description).join(" ").slice(0,300))};
const ev=async x=>{const r=await send("Runtime.evaluate",{expression:x,returnByValue:true});if(r.exceptionDetails)console.log("EVAL ERR",JSON.stringify(r.exceptionDetails).slice(0,300));return r.result?.value};
const shot=async n=>{const r=await send("Page.captureScreenshot",{});fs.writeFileSync(T+"/e_"+n+".png",Buffer.from(r.data,"base64"))};
await send("Runtime.enable"); await send("Emulation.setDeviceMetricsOverride",{width:1440,height:900,deviceScaleFactor:1,mobile:false});
await send("Page.navigate",{url:"http://localhost:5198/"});
for(let i=0;i<40;i++){ if(await ev("document.querySelectorAll('.strata-lp').length")>0) break; await sleep(1000); }
await sleep(1500);
await ev(`(()=>{const e=document.querySelector('.strata-cursor');const r=e.parentElement.getBoundingClientRect();window.scrollTo({top:r.top+scrollY-130,behavior:'instant'})})()`);
const snap=`JSON.stringify({n:[...document.querySelectorAll('.dn-cell')].map(c=>{const t=c.querySelector('.truncate');const tag=c.querySelector('span.font-mono').textContent;return (t.textContent||'∅')+(tag==='EDITING'?'✎':'')}).join(' '),cnt:document.querySelectorAll('.dn-cell').length,cur:[...document.querySelectorAll('.strata-cursor span:nth-child(2)')].map(s=>s.textContent).join(' | ')})`;
let last="", min=99, max=0, shots={}; const t0=Date.now();
while(Date.now()-t0<60000){
  const s=JSON.parse(await ev(snap)); if(s.cnt){min=Math.min(min,s.cnt);max=Math.max(max,s.cnt);}
  const key=s.n+" || "+s.cur;
  if(key!==last){ console.log(String(Math.round((Date.now()-t0)/100)/10).padStart(5)+"s [", s.cnt, "]", s.n, " || ", s.cur); last=key; }
  if(!shots.type && /✎/.test(s.n) && /\/s/.test(s.n)){ shots.type=1; await shot("typing"); }
  await sleep(200);
}
console.log("node count range seen:", min, "-", max);
p.kill(); process.exit(0);
