let TelegramBot = require('node-telegram-bot-api');
let express = require('express');

let server = express();
const port = 3001;

// Telegram bot data
const token = '356322401:AAEy_gOSIc6Vcz5nLWbrMfIz6-HhQGq252c';
let bot = new TelegramBot(token, {polling: true});

server.listen(port, () => {
	console.log((new Date()) + ' - Server started');
	// bot.on("text", message => {
	// 	const chatId = msg.chat.id;
	// 	bot.sendMessage(chatId, "Xablau!");
	// });

	bot.on("message", message => {
		const chatId = message.chat.id;
		bot.sendMessage(chatId, "Received message!");
	});
});