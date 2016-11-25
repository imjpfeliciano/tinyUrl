var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();

var items = [{id: 0, nurl: 'https://www.facebook.com', surl: 'fb'}];
var idcounter = 1;

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(request, response) {
	response.sendfile('index.html')
});

app.get('/list', function(request, response){
    response.json(items);
});

app.post('/list', jsonParser, function(request, response){
	//console.log(request.body.url);
	items.push({id: idcounter, nurl: request.body.url, surl: generateShortUrl(idcounter)});
	idcounter++;
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var generateShortUrl = function(id){
	return 'prueba';
};