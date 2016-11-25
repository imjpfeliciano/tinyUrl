var mongoose = require('mongoose');

module.exports = mongoose.model('Url', {
	idUrl: 		{type: Number},
	NormalUrl: 	{type: String, default: ''},
	ShortUrl: 	{type: String, default: ''},
});

module.exports = mongoose.model('Counter', {
	lastIndex: {type: Number}
});