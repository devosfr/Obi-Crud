const { Sequelize, Model, DataTypes } = require('sequelize');
const database = require('./_database');

const User = database.define('users', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
}, {
    createdAt: false,
    updatedAt: false
});
//Cria a tabela
// Users.sync({ force: true });

module.exports = User;