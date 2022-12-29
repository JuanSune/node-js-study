const express = require('express');
const app = express();
const hb = require('express-handlebars');
const Post = require('./models/Post');


// Configuracao Handblars OU Template Engine
app.engine('handlebars', hb.engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')
// Configuração do Body-parser, serve pra pegar informaçoes atraves do metodo post
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){

    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.send('rataria criada com sucesso')
    }).catch(function(erro){
        res.send('Houve um erro: '+erro)
    })

   
})

app.listen(8081);