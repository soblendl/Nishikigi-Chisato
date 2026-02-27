import { createAPI } from "whispa-js"

console.log("🌸 Iniciando Nishikigi Chisato...")

async function start(){

 try{

  const api = await createAPI({

   sessionPath:"./session",

   plugins:"./plugins",

   prefix:["."],

   owner:[
    "584125014674"
   ],

   botName:"Nishikigi Chisato"

  })

  console.log("[INFO] started")
  console.log("[INFO] Whispa Engine started")

 }catch(err){

  console.error(
   "❌ Error iniciando:",
   err
  )

  process.exit(1)

 }

}

start()
