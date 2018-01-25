module.exports = (currentUserId, CurrentConnectionInterface) => {
    console.log('Loading telegram bot...');
    const TelegramBot = require('node-telegram-bot-api');
    
    const token = '356322401:AAEy_gOSIc6Vcz5nLWbrMfIz6-HhQGq252c';
    let telegramBot = new TelegramBot(token, {polling: true});
    
    telegramBot.on("message", message => {
        currentUserId = message.chat.id; 
        if (message.text === '/start') {
            telegramBot.sendMessage(currentUserId, "Bot Connected! Hello :)");
            console.log((new Date()) + ' User connected to bot. UserId: ' + currentUserId);
        } else {
            const currentConnection = CurrentConnectionInterface.getCurrentConnection();
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
                telegramBot.sendMessage(currentUserId, "Unfortunately there's no one online to help you. We'll be in touch soon.");
                console.log('Socket not connected.');
            }	
        }
    });

    console.log('Telegram bot loaded.');
    return telegramBot
};
