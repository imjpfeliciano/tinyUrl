var Url = require('./models/urls');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app) {
	var count = 0;
	var getNextSequence = function(name){
		count++;
		return count;
	}
	var generateShortUrl = function(idurl){
		return 'prueba';
	}

	app.get('/', function(request, response) {
		response.sendfile('index.html')
	});

	app.get('/api/list', function(request, response){
	    Url.find(function(error, data){
	    	if(error) {
	    		response.send(error);
	    	}

	    	response.json(data);
	    });
	});

	app.post('/api/list', jsonParser, function(request, response){	
		var id = getNextSequence('idUrl');

		var urlshort = new Url({
			idUrl: id,
			NormalUrl: request.body.url,
			ShortUrl: generateShortUrl(id),
		});
	
		Url.create(urlshort, function(error) {
			if(error) return response.status(500).send(error.message);

			//response.status(200).jsonp(urlshort);
		});
	});

	app.get('/api/p/:pageId', function(request, response){
		//Consultamos en la base de datos por la url
	});
}