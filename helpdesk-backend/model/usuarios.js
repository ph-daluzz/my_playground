import database from "../database.js";
import { DataTypes } from "sequelize";

// Definição final e recomendada da tabela
const Usuario = database.define("usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  perfil: {
    type: DataTypes.ENUM("usuario", "tecnico"),
    allowNull: false,
  },
  
});

export default Usuario;
