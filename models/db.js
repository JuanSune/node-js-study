const Sequelize = require('sequelize');

// Conexao com banco de dados
const sequelize = new Sequelize('cadastro','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;