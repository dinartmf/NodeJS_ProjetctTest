var server = require('./app_config.js');
var validator = require('validator');

var constantes = {};
Object.defineProperty(constantes,
    "URI_TOKEN", {
    value: 'http://travellogix.api.test.conceptsol.com/Token',
    writable: false
});

server.post('/users', function(req, res) {

    var userName = validator.trim(validator.escape(req.params['username']));
    var passWord = validator.trim(validator.escape(req.params['password']));

    var  data = 'grant_type=password&username=' + userName + '&password=' + passWord;

    obterTokenUsuario(data);
});

function validarUsuario(userName, passWord) {


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

    var infRetorno = null;

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