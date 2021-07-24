const { Sequelize } = require('sequelize');

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


