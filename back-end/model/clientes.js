import dataBase from "../dataBase.js";

//Importando DataTypes do Sequelize para definir os tipos de dados dos campos da tabela
import { DataTypes } from "sequelize";

// Criação da tabela clientes
const Clientes = dataBase.define("clientes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:  true
        },
    tipo: {
        type: DataTypes.ENUM("aluno", "professor", "funcionario")
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
    },
    placa: {
        type: DataTypes.STRING(7),
        allowNull: false,
        unique: true
    }

},{
    timestamps: false
})

// Exportando tabela Clientes para ser usada no controller
export { Clientes };

