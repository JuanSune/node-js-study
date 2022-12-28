const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const hbs = handlebars.create({
    defaultLayout: "main"
})

app.engine("handlebars", () => hbs)

// Configuracao
// Templeta engine
app.set('view engine','handlebars')

// Conexao com banco de dados
const sequelize = new Sequelize('cadastro','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

app.get('/', function(req, res){
    res.render('../views/formulario')
})

app.listen(8081);