import database from "../database.js";
import { DataTypes } from "sequelize";

// Definição final e recomendada da tabela
const Chamados = database.define(
  "chamados",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    prioridade: {
      type: DataTypes.ENUM("alta", "baixa", "media"),
      defaultValue: "baixa",
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("aberto", "em andamento", "Concluido"),
      defaultValue: "aberto",
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
  }
);

export default Chamados;
