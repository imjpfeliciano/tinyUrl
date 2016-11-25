var mongoose = require('mongoose');

module.exports = mongoose.model('Counter', {
	lastIndex: 		{type: Number}
});