var db = require('./db_config.js');

var constantes = {};
Object.defineProperty(constantes,
    "URI_TOKEN", {
    value: 'http://travellogix.api.test.conceptsol.com/Token',
    writable: false
});

function validarUsuario(userName, passWord) {

    var infRetorno;

    db.User.find({
        username: userName
    }, function(error, user) {

        if (error) {

            var  dadosEnvio = 'grant_type=password&username=' + userName + '&password=' + passWord;

            obterTokenUsuario(dadosEnvio);
        } else {

            var dataAtual = new Date();
            var dataToken = new Date(user.['valid_token']);

            if (dataAtual.getTime() > dataToken.getTime()) {


            }
        }
    });
}

function obterTokenUsuario(dadosEnvio) {

    var unirest = require('unirest');

    unirest.post(constantes.URI_TOKEN)
    .send(dadosEnvio)
    .end(function(res) {

        console.log(formatarDadosRetorno(res));
    });
}

function formatarDadosRetorno(res) {

    var infRetorno;

    var body = res.body;

    if (body['error'] != null) {

        infRetorno = {
            erro: body.error,
            descricao: body.error_description
        };
    } else {

        infRetorno = {
            token: body.access_token,
            usuario: body.userName,
            validade: body['.expires']
        };
    }

    return infRetorno;
}

