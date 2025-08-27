import express from 'express';

//Importa as funções do controller acessos.js
import { registrarEntrada, registrarSaida, listarHistoricoAcessos, pessoasAtivas } from '../controller/acessos.js';

//Cria uma váriavel com a função Router() do express
const routerAcessos = express.Router()

// Definindo as rotas das requisições
routerAcessos.get('/historico', listarHistoricoAcessos);
routerAcessos.get('/pessoas-ativas', pessoasAtivas)
routerAcessos.post('/entrada', registrarEntrada);
routerAcessos.post('/saida', registrarSaida);

// Exportando routerAcessos para poder ser usado no app.js
export default routerAcessos