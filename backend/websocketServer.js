let WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer((request, response) => {
	if (request.url === '/status') {
		response.writeHead(200, {'Content-Type': 'application/json'});
		var responseObject = {
			currentClients: clients.length,
			totalHistory: history.length
		};
		response.end(JSON.stringify(responseObject));
	} else {
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.end('Sorry, unknown url');
	}
});
server.listen(1337, function() { });

// WebSocket Server
let wsServer = new WebSocketServer({
	httpServer: server
});

// Messages and clients
let history = [];
let clients = [];

// Helper functions
var htmlEntities = (str) => {
	return String(str)
		.replace(/&/g, '&amp;').replace(/</g, '&lt;')
		.replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

var _getCurrentTime = () => {
	let currentDate = new Date();
	let formattedTime = '';
	formattedTime = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + date.getSeconds();
	return formattedTime;
};

wsServer.on('request', request => {
	console.log(_getCurrentTime() + ' Connection from origin ' + request.origin + '.');

	// Handling websocket requests
	let connection = request.accept(null, request.origin);

	let userIndex = clients.push(connection) - 1;
	let userName = false;

	console.log(_getCurrentTime() + ' Connection accepted.');

	// Sent back chat history
	if (history.length > 0) {
		connection.sendUTF(JSON.stringify({
			type: 'history',
			data: history
		}));
	}

	// User sent new message
	connection.on('message', message => {
		if (message.type === 'utf8') {

			if (!userName) {
				// Remember user name
				userName = htmlEntities(message.utf8Data);
				console.log('User known as: ' + userName);
			} else {
				console.log(_getCurrentTime() + ' Received message from ' + userName + ': ' + message.utf8Data);

				// Kepping history of all sent messages
				let currentMessageData = {
					time: _getCurrentTime().getTime(),
					text: htmlEntities(message.utf8Data),
					author: userName
				};
				history.push(currentMessageData);
				history.slice(-100);

				// Broadcast message to all connected clients
				let messageDataToSend = JSON.stringify({
					type: 'message',
					data: currentMessageData
				});
				clients.forEach(client => {
					client.sendUTF(messageDataToSend);
				});
			}
		}
	});

	// User disconnected
	connection.on('close', () => {
		if (userName !== false) {
			console.log(_getCurrentTime() + " Peer " + connection.remoteAddress + " disconnected.");
		}

		// Removing user from list of connected clients
		clients.splice(userIndex, 1);
		console.log('Closing browser connection.');
	});
});