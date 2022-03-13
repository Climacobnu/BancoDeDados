//npm i sequelize
//npm i mysql2
//npm i --save express-handlebars
//npm install express
//npm install --save body-parser


//npm install multer 


//https://www.youtube.com/watch?v=Oo8oNXyrxB0

// nodemon index.js

const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
//const res = require("express/lib/response");
const Post = require('./models/Post')


//config
//Template Engine

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))   
app.set("view engine", "handlebars")
//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())





// Rotas

app.get('/', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        //console.log(posts)
        res.render('home', {posts: posts})
    })
   
})

app.get('/cad', function (req, res){
    res.render('formulario')
});





app.post('/add', function (req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
      //  imagem: req.body.file
    }).then(function(){
        //res.send("Post criado com sucesso!")
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
    })
   
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        //res.send("Postagem deletada com sucesso!")
        
        res.redirect('/')
        
   }).catch(function(erro){
         res.send("Esta postagem não existe!")
   })
})

app.listen(8081, function () {
    console.log("Servidor Rodando na url http://localhost:8081");
});

