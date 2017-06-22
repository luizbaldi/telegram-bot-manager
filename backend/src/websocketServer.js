let TelegramBot = require('node-telegram-bot-api');
let WebSocketServer = require('websocket').server;
let http = require('http');
const port = 3001;

// Telegram bot data
const token = '356322401:AAEy_gOSIc6Vcz5nLWbrMfIz6-HhQGq252c';
let bot = new TelegramBot(token, {polling: true});

let server = http.createServer((request, response) => {});

server.listen(port, function() { });

// WebSocket Server
let wsServer = new WebSocketServer({
	httpServer: server
});

// Messages and client
let history = [];
let currentUserId = false;

// Helper functions
let htmlEntities = (str) => {
	return String(str)
		.replace(/&/g, '&amp;').replace(/</g, '&lt;')
		.replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

wsServer.on('request', request => {
	console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

	// Handling websocket requests
	let connection = request.accept(null, request.origin);

	console.log((new Date()) + ' Connection accepted.');

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
			if (currentUserId) {
				console.log((new Date()) + ' User connected and ready to receive messages.');

				// Kepping history of all sent messages
				let currentMessageData = {
					time: (new Date()).getTime(),
					text: htmlEntities(message.utf8Data),
					userId: currentUserId
				};
				history.push(currentMessageData);
				history.slice(-100);

				// Broadcast message to all connected clients
				let messageDataToSend = JSON.stringify({
					type: 'message',
					data: currentMessageData
				});
				connection.sendUTF(messageDataToSend);
				bot.sendMessage(currentUserId, message.utf8Data);
			} else {
				console.log("User not connected to bot.");
			}
		}
	});

	// User disconnected
	connection.on('close', () => {
		console.log('Closing browser connection.');
	});
});

// Telegram Bot
bot.on("message", message => {
	if (message.text == '/start') {
		currentUserId = message.chat.id; 
		bot.sendMessage(currentUserId, "Bot Connected! Hello :)");
		console.log((new Date()) + ' User connected to bot. UserId: ' + currentUserId);
	}
});