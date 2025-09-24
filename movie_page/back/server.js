// config .env
const dotenv = require('dotenv')
dotenv.config()

// imports and using express
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

// importing routes
const rotaFilmes = require('./routes/rotasFilmes.js')
app.use("/", rotaFilmes)

// server starts
app.listen(3000, console.log(`Server rodando na porta ${port}`))