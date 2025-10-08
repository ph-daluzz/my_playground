import { Usuario, Chamados } from "../model/index.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const JWT_SECRET = process.env.JWT_SECRET;

export async function registrarUsuario(req, res) {
  try {
    const { nome, email, senha, perfil } = req.body;
    // verifica se nas imnformações passadas, está tudo preenchido
    if (!nome || !email || !senha) {
      return res.status(400).send({ mensagem: "Dados incompletos" });
    }
    // verificar no banco se já existe algum usuário com o mesmo email
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).send({ mensagem: "Email já cadastrado" });
    }

    // criptografar senha com bcrypt
    const salt = await bcrypt.genSalt(10); // salt para criar dado aleatório para garantir unicidade da senha
    const senhaCriptografada = await bcrypt.hash(senha, salt);
    // caso passe em todas validações, faz o cadastro do usuário
    await Usuario.create({ nome, email, senha: senhaCriptografada, perfil });
    res.status(201).send({ mensagem: "Usuario criado" });
  } catch (err) {
    console.log(`Erro:${err}`);
    res.status(500).send({ mensagem: "erro no servidor" });
  }
}

export async function login(req, res) {
  try {
    const { email, senha } = req.body;
    // verificação de dados do usuario
    if (!email || !senha) {
      return res.status(400).send({ mensagem: "Campos não preenchidos" });
    }
    // buscar dados do usuario tentando acessar
    const usuarioAcessando = await Usuario.findOne({ where: { email } });

    if (!usuarioAcessando) {
      // verificar se usuário existe no banco
      return res.status(404).send({ mensagem: "Usuario não encontrado" });
    }
    // verificar se a senha informada coincide com o banco
    const senhaAcesso = usuarioAcessando.senha;
    const id_usuario = usuarioAcessando.id; // payload para jwt

    const senhaCorreta = await bcrypt.compare(senha, senhaAcesso); // verifica se a senha está correta
    if (senhaCorreta) {
      // senha correta, gerar token
      const token = jwt.sign({ id: id_usuario }, JWT_SECRET, {
        expiresIn: "1d",
      });
      return res.status(200).send({ token });
    } else {
      // caso senha seja incorreta
      return res.status(401).send({ mensagem: "credenciais invalidas" });
    }
  } catch (err) {
    console.log(`Erro: ${err}`);
    res.status(500).send({ mensagem: `houve um erro: ${err}` });
  }
}
