import { Router } from "express";
import { validarToken } from "../middlewares/auth.js";

// todas funcoes de chamados, em arquivo .js unico
import {
  listarChamadosUsuario,
  listarTodosChamados,
  gerarChamado,
  atualizarChamado,
  deletarChamado,
} from "../controllers/chamados.js";

// funcoes de usuario
import { registrarUsuario, login } from "../controllers/usuario.js";

const router = Router();

// endpoints chamados
router.get("/chamado", validarToken, listarChamadosUsuario);
router.get("/chamado/all", validarToken, listarTodosChamados);
router.post("/chamado", validarToken, gerarChamado);
router.put("/chamado/:id", validarToken, atualizarChamado);
router.delete("/chamado/:id", validarToken, deletarChamado);

// endpoints usuario
router.post("/registrarUsuario", registrarUsuario);
router.post("/login", login);

export default router;
