var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));


app.get('/', function(request, response) {
	response.sendfile('index.html')
});

app.get('/list', function(request, response){
	console.log('request to list');
    response.json({ id: 1, nurl: 'https://www.facebook.com', surl: 'fb'});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
