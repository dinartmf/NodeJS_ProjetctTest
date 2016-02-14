var  db_uri = 'mongodb://127.0.0.1/api_restful';

var mongoose = require('mongoose').connect(db_uri);

var User;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error ao conectar ao banco.'));
db.once('open', function() {

    var userSchema = mongoose.Schema{

        username: String,
        password: String,
        token: String,
        valid_token: Date,
        created_at: Date
    };

    exports.User = mongoose.model('User', userSchema);
});