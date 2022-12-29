const express = require('express');
const app = express();
const hb = require('express-handlebars');
const Sequelize = require('sequelize');


// Configuracao Handblars OU Template Engine
app.engine('handlebars', hb.engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')
// Configuração do Body-parser, serve pra pegar informaçoes atraves do metodo post
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Conexao com banco de dados
const sequelize = new Sequelize('cadastro','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

app.get('/', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    
    res.send(`Titulo escrito foi: ${req.body.titulo} e o conteudo: ${req.body.conteudo}`)
})

app.listen(8081);