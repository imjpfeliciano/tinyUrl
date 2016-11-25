module.exports = {
	url: 'mongodb://admin:hosthunter@ds041164.mongolab.com:41164/hosthunter',
	options : { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } }
}