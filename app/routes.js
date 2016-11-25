var Url = require('./models/urls');
var Counter = require('./models/counter');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = function(app) {
	var id = 1000;
	var generateShortUrl = function(idurl){
		var alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

		if (idurl === 0) {return '0';}
        var s = '';
        while (idurl > 0) {
            s = alphabet[idurl % 62] + s;
            idurl = Math.floor(idurl/62);
        }
        return s;
	};

	var getCurrentPage = function(url){
		var alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

		var val = 0, base62Chars = url.split("").reverse();
        base62Chars.forEach(function(character, index){
            val += alphabet.indexOf(character) * Math.pow(62, index);
        });
        return val;
	};

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


		/*
		var id;
		var _id;

		Counter.find(function(error, data){
			if(error) {
				response.send(error);
			}

			console.log(data);
		});
		*/

		//var current = collection;
		//var current = current[0]; 
		//console.log(current);
		
		//Counter.update({_id: _id}, {$set: {lastIndex: id + 1}});
		
		var urlshort = new Url({
			idUrl: id,
			NormalUrl: request.body.url,
			ShortUrl: generateShortUrl(id),
		});
	
		id++;

		Url.create(urlshort, function(error) {
			if(error) return response.status(500).send(error.message);
		});
		
	});

	app.get('/api/p/:pageId', function(request, response){
		//Url.find();
	});
}