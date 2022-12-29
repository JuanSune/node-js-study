const db = require('./db');

const Post = db.sequelize.define('rataria', {
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

Post.sync({force: true});