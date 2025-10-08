import { Usuario, Chamados } from "../model/index.js";
export async function listarChamadosUsuario(req, res) {
  try {
    const id_usuario = req.id_usuario;
    if (!id_usuario) {
      return res.status(400).json({ mensagem: "ID do usuário não fornecido" });
    }
    const chamadosUsuario = await Chamados.findAll({
      where: { id_usuario: id_usuario },
    });
    if (chamadosUsuario.length <= 0) {
      return res.status(500).send({ mensagem: "Nenhum chamado encontrado" });
    }
    res.status(200).json(chamadosUsuario);
  } catch (erro) {
    console.log(erro);
    res.status(500).json({ mensagem: "Erro ao listar chamados do usuário" });
  }
}

export async function listarTodosChamados(req, res) {
  try {
    const id_usuario = req.id_usuario;

    const usuario = await Usuario.findByPk(id_usuario);

    if (!id_usuario || usuario.perfil !== "tecnico") {
      return res
        .status(403)
        .json({ mensagem: "Acesso negado, permissão insuficiente" });
    }
    const todosChamados = await Chamados.findAll();
    res.status(200).json(todosChamados);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ mensagem: "Erro interno ao listar todos os chamados" });
  }
}

export async function gerarChamado(req, res) {
  try {
    // buscar id do usuario
    const id_usuario = req.id_usuario;
    if (!id_usuario) {
      return res.status(400).send({ mensgem: "ID do usuário não fornecido!" });
    }
    // busca informações informadas pelo body
    const { titulo, descricao, categoria, prioridade } = req.body;

    if (!titulo || !descricao || !categoria || !prioridade) {
      return res.status(400).json({ mensagem: "Dados incompletos" });
    }
    // cria novo chamado no banco
    const novoChamado = await Chamados.create({
      titulo,
      descricao,
      categoria,
      prioridade,
      id_usuario,
    });
    res.status(201).json(novoChamado);
  } catch (err) {
    res.status(500).send({ mensagem: "Erro ao criar chamado" });
  }
}

export async function atualizarChamado(req, res) {
  try {
    const { id } = req.params; // id do usuario da requisição
    const id_usuario = req.id_usuario; // id do usuario logado
    const dadosAtualizados = req.body; // novos dados

    // buscar o chamado no banco
    const chamado = await Chamados.findByPk(id);
    if (!chamado) {
      return res.status(404).json({ mensagem: "Chamado não encontrado." });
    }

    // busca o usuario para verificar o nivel de acesso
    const usuario = await Usuario.findByPk(id_usuario);

    // verifica se o id do chamado bate com o id do usuario
    if (usuario.perfil !== "tecnico" && chamado.id_usuario !== id_usuario) {
      return res.status(403).json({
        mensagem:
          "Acesso negado. Você não tem permissão para editar este chamado.",
      });
    }
    // atualiza os dados no banco
    await chamado.update(dadosAtualizados);
    return res.status(200).json(chamado);
  } catch (err) {
    console.log(err)
    res.status(500).json({ mensagem: "Erro ao atualizar banco" });
  }
}

export async function deletarChamado(req, res) {
  try {
    // 1. Pegar os IDs da requisição
    const { id } = req.params; // ID do chamado que vem da URL
    const id_usuario = req.id_usuario; // ID do usuário logado (vem do token)

    // 2. Encontrar o chamado no banco de dados
    const chamado = await Chamados.findByPk(id);
    if (!chamado) {
      return res.status(404).json({ mensagem: "Chamado não encontrado." });
    }

    // 3. Verificar permissões (regra de negócio de segurança)
    const usuario = await Usuario.findByPk(id_usuario);

    // NEGAR o acesso se o usuário NÃO for um técnico E TAMBÉM não for o dono do chamado
    if (usuario.perfil !== "tecnico" && chamado.id_usuario !== id_usuario) {
      return res
        .status(403)
        .json({
          mensagem:
            "Acesso negado. Você não tem permissão para deletar este chamado.",
        });
    }

    // 4. Deletar o chamado do banco de dados
    await chamado.destroy();

    // 5. Enviar a resposta de sucesso
    // 204 No Content é o status HTTP padrão para DELETE bem-sucedido.
    return res.status(204).send();
  } catch (erro) {
    console.error("Erro ao deletar chamado:", erro);
    res.status(500).json({ mensagem: "Erro interno ao deletar o chamado." });
  }
}
