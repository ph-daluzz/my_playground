import express from "express"

// Importa a função login do controller usuario.js
import { login } from "../controller/usuario.js"

// Cria uma váriavel com a função Router do express
const routerUsuario = express.Router()

// Cria a rota de login
routerUsuario.post("/login", login)

// Exportando routerUsuario para poder ser usado no app.js
export default routerUsuario