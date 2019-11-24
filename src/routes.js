const express = require('express');
const multer = require('multer');

const spliter = require('./spliter');

const routes = express.Router();

// A rota q irá executar 'localhost:3333/new'

routes.get('/split', spliter.index); 

module.exports = routes; // Exportandos as rotas, para a aplicação usar