import { Op } from "sequelize";
import { Acessos } from "../model/acessos.js"
import { Clientes } from "../model/clientes.js";
import RelatorioAcessos from "../model/relatorioAcessos.js";

// Função para registrar horário de entrada  dos veículos no estacionamento
const registrarEntrada = async (req, res) => {
    try {
        const { placa } = req.body;

        // Verifica se o veículo já está registrado no estacionamento
        const acessoExistente = await Acessos.findOne({ where: { placa } });
        if (acessoExistente) {
            return res.status(400).send({ mensagem: "Veículo já registrado no estacionamento." });
        }

        // Verifica se a placa pertence a um cliente cadastrado
        const cliente = await Clientes.findOne({ where: { placa } });
        if (!cliente) {
            return res.status(404).send({ mensagem: "Essa placa não pertence a um cliente." });
        }

        // Registra a entrada no acesso
        await Acessos.create({ placa });

        // Registra no relatório de acessos com data/hora da entrada
        const dataEntrada = new Date();
        await RelatorioAcessos.create({ placa: cliente.placa, entrada: dataEntrada });

        return res.status(200).send({ mensagem: `${cliente.nome} entrou no estacionamento` });

    } catch (error) {
        console.error("Erro ao registrar entrada:", error);
        return res.status(500).send({ mensagem: "Erro ao registrar acesso no estacionamento.", error });
    }
};
// Função para registrar o horario de saída dos veículos no estacionamento
const registrarSaida = async (req, res) => {
    try {
        const { placa } = req.body; //<-- Recebe a placa do veículo

        const dataSaida = new Date() //<--Recebe a data atual de saida
        await RelatorioAcessos.update({
            saida: dataSaida //<-- Atualiza o horário de saída do cliente na tabela RelatorioAcessos
        }, {
            where: { placa } //<-- Onde a placa for igual a placa do cliente
        })

        await Acessos.destroy({ where: { placa } }) //<-- Exclui o registro de entrada do veiculo
        const cliente = await Clientes.findOne({ where: { placa } }) //<-- paga as informações do cliente

        res.status(200).send({ mensagem: `${cliente.nome} saiu do estacionamento!` });
    } catch (error) {
        res.status(500).send({ mensagem: "Erro ao registrar horário de saída.", error });
    }
};

// const deletarRegistroRelatorio = async (req, res) => {
//     try {
//         //requisita a placa no corpo da requisição
//         const { id } = req.body
//         cliente = Clientes.findOne({ where: { id } }) //<-- Pega as informações do cliente com o id informado no relarotio
//         RelatorioAcessos.destroy({ where: { id } }) //<-- Exclui o registro de acesso com o id informado no relarotio
//         res.status(200).send({ mensagem: `Registro de acesso do cliente ${Clientes.nome} deletado com sucesso!` })
//     } catch (erro) {
//         res.status(500).send({ mensagem: "Erro ao deletar registro do relatório.", erro });
//     }
// }

const listarHistoricoAcessos = async (req, res) => {
    try {
        const relatorios = await RelatorioAcessos.findAll();
        res.status(200).send(relatorios);
    } catch (error) {
        res.status(500).send({ mensagem: "Erro ao listar relatórios de acesso.", error });
    }
}

const pessoasAtivas = async (req, res) => {
    // Função para listar pessoas ativas no estacionamento
    try {
        const pessoasAtivas = await Acessos.findAll();

        // validar se retornou resultados
        if (!pessoasAtivas || pessoasAtivas.length === 0) {
            return res.status(404).send({ mensagem: "Nenhuma pessoa ativa encontrada" });
        }

        const placas = pessoasAtivas.map(pessoa => pessoa.placa); // <-- Extrai as placas das pessoas ativas

        // verifica se há placas ativas
        if (placas.length === 0) {
            return res.status(404).send({ mensagem: "Nenhuma placa ativa encontrada" });
        }

        // Logando as placas ativas
        console.log("Placas ativas:", placas);


        // Busca os clientes correspondentes às placas ativas
        const pessoas = await Clientes.findAll({ where: { placa: { [Op.in]: placas } } });

        // Logando as pessoas encontradas
        console.log("Pessoas ativas encontradas:", placas);


        return res.status(200).send(pessoas);

    } catch (error) {
        console.error("Erro ao listar pessoas ativas:", error);
        return res.status(500).send({ mensagem: "Erro ao listar pessoas ativas.", error });
    }
};

export { registrarEntrada, registrarSaida, listarHistoricoAcessos, pessoasAtivas };