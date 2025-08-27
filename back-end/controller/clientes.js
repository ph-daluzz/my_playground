import { Clientes } from "../model/clientes.js";

// Função para cadastrar cliente ////////////////////////////////////////////////////////////////////////
const cadastrarCliente = async (req, res) => {
    //Requisita o tipo, nome, cpf e placa do cliente no corpo da requisição (req.body)
    const { tipo, nome, cpf, placa } = req.body;
    //Se algum dos campos não for preenchido, retorna um erro 400 com uma mensagem avisando que é necessário preencher todos os campos
    if (!tipo || !nome || !cpf || !placa) {
        res.status(400).send({ mensagem: "Insira o Tipo e o nome do cliente" });
        return
    }
    //Tenta cria um novo cliente no banco de dados com os dados fornecidos, se der erro retorna erro 500 com mensagem de erro
    try {
        const cliente = await Clientes.create({ tipo, nome, cpf, placa });
        res.status(201).send({ mensagem: `Veículo com a placa ${placa} do ${tipo} ${nome} cadastrado com sucesso!🥳`, cliente });
    } catch (error) {
        res.status(500).send({ mensagem: "Erro ao cadastrar cliente", erro: error.message });
    }
};

// Função para listar todos os clientes cadastrados no banco de dados ///////////////////////////////////
const listarClientes = async (req, res) => {
    try {
        // Cria uma constante "clientes" que vai esperar(await Clientes.findAll()) encontrar todos o clientes cadastrados na tabela Clientes do banco de dados
        const clientes = await Clientes.findAll();
        // quando encontrar os clientes, retorna um status 200 com a lista de clientes
        res.status(200).send(clientes)
    } catch (error) {
        res.status(500).send({ mensagem: "Erro ao listar clientes", erro: error.message });
    }
};

//Função para atualizar cliente /////////////////////////////////////////////////////////////////////////
const atualizarCliente = async (req, res) => {
    // Requisita o ID do cliente a ser atualizado nos parâmetro da requisição (req.params)
    const { id } = req.params;
    // Requisita os novos dados do cliente no corpo da requisição (req.body)
    const { tipo, nome, cpf, placa } = req.body;

    // Tenta atualizar o cliente com o ID fornecido, se não encontrar retorna um erro 404 com mensagem de que o cliente não foi encontrado
    try {
        const cliente = await Clientes.update({ tipo, nome, cpf, placa }, { where: { id } });
        if (cliente[0] > 0) {
            res.status(200).send({ mensagem: `Cliente com ID ${id} atualizado com sucesso!` });
            return
        } else {
            res.status(404).send({ mensagem: `Cliente com ID ${id} não encontrado.` });
        }
    } catch (error) {
        res.status(500).send({ mensagem: "Erro ao atualizar cliente", erro: error.message });
    }
}

//Função para deletar cliente ///////////////////////////////////////////////////////////////////////////
const excluirCliente = async (req, res) => {
    // Requisita o ID do cliente a ser excluído nos parâmetro da requisição (req.params)
    const { id } = req.params;
    // Tenta excluir o cliente com o ID fornecido, se não encontrar retorna um erro 404 com mensagem de que o cliente não foi encontrado
    try {
        const cliente = await Clientes.destroy({ where: { id } })
        if (cliente) {
            res.status(200).send({ mensagem: `Cliente com ID ${id} excluído com sucesso!` });
            return
        } else {
            res.status(404).send({ mensagem: `Cliente com ID ${id} não encontrado.` });
        }
    } catch (error) {
        res.status(500).send({ mensagem: "Erro ao excluir cliente", erro: error.message });
    }
};

const detalhes = async (req, res) => {
    const { placa } = req.params; // Requisita a placa do veículo nos parâmetros da requisição

    if (!placa) {
        return res.status(400).send({ mensagem: "Placa não fornecida." });
    }

    try {
        const cliente = await Clientes.findOne({ where: { placa } });

        if (cliente) {
            return res.status(200).send(cliente);
        } else {
            return res.status(404).send({ mensagem: `Cliente com placa ${placa} não encontrado.` });
        }
    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao buscar detalhes do cliente",
            erro: error.message
        });
    }
};

// exportações para funções poderem ser usadas na pasta routes
export { cadastrarCliente, listarClientes, excluirCliente, atualizarCliente, detalhes }