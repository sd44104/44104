export default async function handler(req,res){
 if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
 const {prompt}=req.body||{}; if(!prompt) return res.status(400).json({error:"prompt required"});
 try{const r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.OPENAI_API_KEY}`},body:JSON.stringify({model:process.env.OPENAI_MODEL||"gpt-5-mini",input:prompt})});const d=await r.json();if(!r.ok)return res.status(r.status).json({error:d.error?.message||"OpenAI error"});res.status(200).json({text:d.output_text||""});}catch(e){res.status(500).json({error:e.message});}
}
