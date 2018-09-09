const http = require('http');

const server = http.createServer((request, response) => {
	console.log('Instantiating server...');
});

module.exports = server;