import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export function validarToken(req, res, next) {
  try {
    // buscar token no header
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(401)
        .send({ mensagem: "Acesso negado, token inválido" });
    }
    const partes = authHeader.split(" "); // divide a string em um array: ['Bearer', 'token...']

    if (partes.length !== 2 || partes[0] !== "Bearer") {
      return res
        .status(401)
        .send({ mensagem: "Erro no formato do token. Use o formato Bearer." });
    }

    const token = partes[1]; // atribui o valor do token pego com metodo .split
    const conteudoToken = jwt.verify(token, JWT_SECRET);
    // identificar qual usuário gerou esse token
    const id_usuario = conteudoToken.id;
    // registrar na requisição o id identificado
    req.id_usuario = id_usuario;
    next();
  } catch (err) {
    res.status(401).send({ mensagem: "acesso negado" });
  }
}
