import { createAPI } from "whispa-js"
import config from "./config.js"

console.log(`🌸 Iniciando ${config.botName}...`)

async function start(){

 try{

  await createAPI(config)

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
