var restify = require('restify');

var server = module.exports = restify.createServer();
server.use(restify.urlEncodedBodyParser());
server.listen(8080);