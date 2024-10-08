// Módulo de configuração e aplicação da webapi

// Importar o pacote express (servidor)
const express = require('express');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require( 'dotenv').config();
const taskRouter = require('./routes/taskRouter');
const cors = require('cors');

// Instanciar o express na variável app
const app = express();
// Setar a porta do servidor, a parir do arquivo .env ou assumir 3005
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use('/api', taskRouter);

module.exports = app;