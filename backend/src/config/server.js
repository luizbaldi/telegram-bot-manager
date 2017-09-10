const http = require('http');

const server = http.createServer((request, response) => {
	var url = request.url;

	if (url == '/login') {
		// Save login data here
	}
});

console.log('Instantiating server...');
module.exports = server;