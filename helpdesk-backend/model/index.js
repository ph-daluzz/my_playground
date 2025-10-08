import Usuario from "./usuarios.js";
import Chamados from "./chamados.js";

Usuario.hasMany(Chamados, {
  foreignKey : "id_usuario",
  as: "chamados",
});

Chamados.belongsTo(Usuario, {
  foreignKey : "id_usuario",
  as: "usuario",
});

export { Usuario, Chamados };
