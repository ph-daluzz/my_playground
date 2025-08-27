
import { Sequelize } from "sequelize";
import express from "express"

//importar dotenv para usar variáveis de ambiente
import "dotenv/config"

// Cria uma instância do Sequelize para conectar ao banco de dados chamada de "dataBase"
const dataBase = new Sequelize(process.env.BANCO_DE_DADOS)


    try {
        await dataBase.authenticate() //Conectar com o banco de dados
        console.log("Conexão com o banco de dados estabelecida com sucesso! 🥳") //mostrar no terminal
    } catch (erro) {
        console.log("Erro ao conectar com o banco de dados: ", erro) //mostrar no terminal
    }

export default dataBase
