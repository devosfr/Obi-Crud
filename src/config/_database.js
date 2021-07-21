const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();
const router = express.Router();

// conexão
const sequelize = new Sequelize('obicrude', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Conectado com Sucesso!!!!");
}).catch((erro) => {
    console.log("Falha ao se conectar", erro);
});

module.exports = sequelize;


