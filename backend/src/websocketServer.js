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
let currentUserId = false;
let currentConnection = false;

// Helper functions
let htmlEntities = (str) => {
	return String(str)
		.replace(/&/g, '&amp;').replace(/</g, '&lt;')
		.replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

wsServer.on('request', request => {
	console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

	// Handling websocket requests
	currentConnection = request.accept(null, request.origin);

	console.log((new Date()) + ' Connection accepted.');

	// Handle manager panel message
	currentConnection.on('message', message => {
		if (message.type === 'utf8') {
			if (currentUserId) {
				console.log((new Date()) + ' User connected and ready to receive messages.');

				// Send message from manager to bot
				bot.sendMessage(currentUserId, message.utf8Data);
			} else {
				console.log("User not connected to bot.");
			}
		}
	});

	// User disconnected
	currentConnection.on('close', () => {
		console.log('Closing browser connection.');
	});
});

// Telegram Bot
bot.on("message", message => {
	currentUserId = message.chat.id; 
	if (message.text === '/start') {
		bot.sendMessage(currentUserId, "Bot Connected! Hello :)");
		console.log((new Date()) + ' User connected to bot. UserId: ' + currentUserId);
	} else {
		if (currentConnection) {
			// Send message from bot to manager
			let messageData = {
				user: message.from,
				message: message.text,
				date: message.date
			};
			let messageDataToSend = JSON.stringify({
				type: 'message',
				data: messageData
			});
			currentConnection.sendUTF(messageDataToSend);
			console.log('Message received!');
			// bot.sendMessage(currentUserId, "Message received!");
		} else {
			console.log('Socket not connected.');
		}	
	}
});