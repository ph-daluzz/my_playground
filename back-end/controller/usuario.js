// Cria a função de login que será usada para autenticar usuários
const login = (req, res, next) => {
    // Requisita as contantes "usuario" e "senha" do corpo da requisição (req.body)
    const { usuario, senha} = req.body
    if( !usuario || !senha) {
        res.status(400).send({ mensagem: usuario ? "insira a senha" : "insira o usuário"})
        return
    } else if( usuario !== "admin" || senha !== "admin" ) {
        res.status(401).send({mensagem: "Usuário ou senha inválidos"})
        return
    } else {
        res.status(200).send({mensagem: "Login realizado com sucesso!🥳"})
        next()// <-- envia para a próxima validação
    }
}

// Exporta função login para ser usada em routes/usuario.js
export { login }