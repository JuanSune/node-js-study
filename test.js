

const Postagem = sequelize.define(
    'postagens',
    {
        titulo:{
            type: Sequelize.STRING
        },
        cocholate:
        {
            type: Sequelize.TEXT
        }
    }

)

Postagem.create({
    titulo:'agora sim',
    cocholate:'chocolate branco'

})
