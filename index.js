import { createAPI } from "whispa-js"
import config from "./config.js"

async function start(){

 console.log(`🌸 Iniciando ${config.name}...`)

 const api = await createAPI({

  sessionPath:config.sessionPath,

  prefix:config.prefix,

  owner:config.owner,

  plugins:config.plugins,

  logLevel:config.logLevel

 })

 console.log("✅ Nishikigi Chisato conectada")

 process.on("SIGINT", async ()=>{

  console.log("🌸 Apagando Nishikigi Chisato...")

  await api.lifecycle.stop()

  process.exit(0)

 })

}

start()
