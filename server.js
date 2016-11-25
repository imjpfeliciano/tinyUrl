var express = require('express');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var app = express();

var idcounter = 0;

var db = require('./config/db');
//DB
var mongooseUri = uriUtil.formatMongoose(db.url);
mongoose.connect(mongooseUri, db.options);

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));


app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

require('./app/routes')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var generateShortUrl = function(id){
	return 'prueba';
};

exports = module.exports = app;