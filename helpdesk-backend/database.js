import dotenv from 'dotenv'
dotenv.config()

import Sequelize from "sequelize";

//variavel que recebe valor do dotenv
const urlBanco = process.env.API_BANCO

// instanciar banco de dados 
const database = new Sequelize(urlBanco)

export default database