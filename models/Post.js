const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
     conteudo: {
         type: db.Sequelize.TEXT
     },

     Imagem: {
        type: db.Sequelize.BLOB
    } 
})

//Criando as  Colunas
//Post.sync({force:true})

module.exports = Post