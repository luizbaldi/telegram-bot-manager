module.exports = (server, telegramBot, CurrentConnectionInterface) => {
	console.log('Loading web socket...');
	let WebSocketServer = require('websocket').server;
	
	let webSocket = new WebSocketServer({
		httpServer: server
	});

	webSocket.on('request', request => {
		console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
	
		// Handling websocket requests
		let currentConnection = request.accept(null, request.origin);
	
		console.log((new Date()) + ' Connection accepted.');
	
		// Handle manager panel message
		currentConnection.on('message', message => {
			if (message.type === 'utf8') {
				console.log((new Date()) + ' User connected and ready to receive messages.');
	
				let currentMessage = JSON.parse(message.utf8Data);
				// Send message from manager to bot
				telegramBot.sendMessage(currentMessage.userId, currentMessage.message);
			}
		});
	
		// User disconnected
		currentConnection.on('close', () => {
			console.log('Closing browser connection.');
		});

		CurrentConnectionInterface.setCurrentConnection(currentConnection);
	});

	console.log('Web socket loaded.');
	return webSocket;
};


