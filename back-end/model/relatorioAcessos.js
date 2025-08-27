import dataBase from "../dataBase.js";
import { DataTypes } from "sequelize";

// Criação da tabela relatorio_acessos
const RelatorioAcessos = dataBase.define("relatorio_acessos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    placa: {
        type: DataTypes.STRING(7),
        allowNull: false,
    },
    entrada: {
        type: DataTypes.DATE,
        allowNull: false
    },
    saida: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false
})

export default RelatorioAcessos