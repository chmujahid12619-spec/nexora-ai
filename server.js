const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

const HTML=`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NEXORA AI</title><style>body{background:#050B18;color:#fff;font-family:sans-serif;padding:0;margin:0}nav{padding:15px;background:#0F172A;display:flex;justify-content:space-between} .card{background:#0F172A;border:1px solid #1E293B;border-radius:10px;padding:15px;margin:10px}.btn{background:#2563EB;color:#fff;padding:10px 15px;border:none;border-radius:8px}</style></head><body><nav><b>NEXORA AI - Harf-e-Akhir</b><button class="btn" onclick="window.open('https://wa.me/923269447550')">PRO $29</button></nav><div style="padding:20px;text-align:center"><h1>The Intelligence Operating System</h1><p style="color:#94A3B8">Goal -> Plan -> Research -> Execute -> Report</p><div class="card"><h3>Chat with NEXORA</h3><div id="c" style="background:#020617;height:150px;overflow:auto;padding:10px;margin:10px 0;text-align:left;border-radius:8px">NEXORA: I am ready. Give me your GOAL.</div><input id="q" style="width:100%;padding:10px;border-radius:8px;border:1px solid #333;background:#020617;color:#fff" placeholder="Enter your goal..."><button class="btn" style="width:100%;margin-top:10px" onclick="ask()">Execute</button></div><div class="card"><b>Developed by Ch Mujahid Hussain CCR | CHAPEXBRANDINGHUB | Lahore</b></div></div><script>function ask(){let q=document.getElementById('q'),c=document.getElementById('c');if(!q.value)return;c.innerHTML+='<div>You: '+q.value+'</div>';fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:q.value})}).then(r=>r.json()).then(d=>{c.innerHTML+='<div style=background:#1E293B;padding:5px;margin:5px 0;border-radius:5px>NEXORA: '+d.reply+'</div>';c.scrollTop=9999});q.value=''}</script></body></html>`;

app.get('/',(req,res)=>res.send(HTML));
app.post('/api/chat',(req,res)=>{
  res.json({reply: 'NEXORA Executed: "'+req.body.message+'" -> Plan -> Research -> Verified -> Done. Add GROQ key for live AI.'});
});
app.listen(process.env.PORT||3000,()=>console.log('NEXORA LIVE'));
