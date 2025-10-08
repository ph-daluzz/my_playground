// importing dotenv
import "dotenv/config";

// importando banco
import db from "../database.js";

// importando modelos para o db
import "../model/index.js";

// importando express e cors
import express from "express";
import cors from "cors";

// configurando servidor
const app = express();
app.use(cors());
app.use(express.json());

//conectando banco
try {
  await db.authenticate();
  console.log("Banco conectado");
} catch (e) {
  console.log(e, "erro ao conectar com banco");
}

// sincronizando tabelas banco
// await db.sync({alter: true});

import rotas from "../routes/rotas.js";
app.use("/", rotas);

app.listen(process.env.PORTA_SERVER, () => console.log("Servidor online"));
