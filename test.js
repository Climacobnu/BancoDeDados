//npm i sequelize
//npm i mysql2
//npm i --save express-handlebars
//npm install express


/*
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"

})



sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})


const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})



Postagem.create({
    titulo: "Um titulo qualquer",
    conteudo: "conteudo qualquer"
})


//Postagem.sync({force: true})

const Usuario = sequelize.define('usuarios', {
   
    nome: {
        type: Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
        },

     email: {
         type: Sequelize.STRING
     }   
    
})

//Usuario.sync({force: true})

/*
Usuario.create({
    nome: "leandro",
    sobrenome: "climaco",
    idade: 34,
    email: "climacobnu@gmail.com"

})




*/