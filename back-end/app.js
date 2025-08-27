import express from "express"
const app = express()
import cors from 'cors'

// importar e rodar dataBase.js
import dataBase from "./dataBase.js"
// await dataBase.sync({}) //Sincronizar código com o bando de dados

//importar rotas
import routerUsuario from "./routes/usuario.js"
import routerClientes from "./routes/clientes.js"
import routerAcessos from "./routes/acessos.js"

// usar json
app.use(express.json())

// cors 
app.use(cors())
//usar rotas

// rotas de acesso
app.use(routerUsuario)
app.use(routerClientes)
app.use(routerAcessos)

//abrir servidor na porta 3000
app.listen(3000, () => { console.log("Servidor rodando na porta 3000🥳") })