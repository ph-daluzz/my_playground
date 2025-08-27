import express from "express"

// Importar as funções do controller clientes.js
import { cadastrarCliente, excluirCliente, listarClientes, atualizarCliente, detalhes } from "../controller/clientes.js"

// Criar uma variavel com função Router do express usada para gerenciar rotas
const routerClientes = express.Router()

// Definindo rotas de requisições
routerClientes.post("/clientes", cadastrarCliente)
routerClientes.get("/detalhes/:placa", detalhes)
routerClientes.put("/clientes/:id", atualizarCliente)
routerClientes.get("/clientes", listarClientes)
routerClientes.delete("/clientes/:id", excluirCliente)

// Exportando o routerClientes para ser usado no app.js
export default routerClientes