var db = require('./db_config.js');

function consultarUsuario(userName) {

    var infRetorno;

    db.User.find({
        username:, userName
    }, function(error, user) {

        if (error) {

            infRetorno = {
                error: 'erro',
                descricao: 'Não foi possível validar o usuário.'
            };
        } else {

            var dataAtual = new Date();
            var dataToken = new Date(user.['valid_token']);


        }
    });
}