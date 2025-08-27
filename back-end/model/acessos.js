import dataBase from "../dataBase.js";
import { DataTypes } from "sequelize";

// Criação da tabela acessos

const Acessos = dataBase.define("acessos", {
    placa: {
        type: DataTypes.STRING(7),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
})

// Exportando tabela Acessos para ser usada no controller
export { Acessos };