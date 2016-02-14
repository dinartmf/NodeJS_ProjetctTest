var server = require('./app_config.js');
var validator = require('validator');

server.post('/users', function(req, res) {

    var userName = validator.trim(validator.escape(req.params['username']));
    var passWord = validator.trim(validator.escape(req.params['password']));



    obterTokenUsuario(data);
});

function validarUsuario(userName, passWord) {


}