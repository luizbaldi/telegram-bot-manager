let TelegramBot = require('node-telegram-bot-api');
let express = require('express');

let server = express();
let port = 3001;

const token = '356322401:AAEy_gOSIc6Vcz5nLWbrMfIz6-HhQGq252c';
let bot = new TelegramBot(token, {polling: true});

server.listen(port, () => {
	bot.on("text", message => {
		bot.sendMessage(message.chat.id, "Xablau!");
	});
});