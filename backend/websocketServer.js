/* Config params */
const port = 3001;

/* Messages and clients variables (while system is not persisting data) */
let currentUserId = false;

/* Main files and configs */
const server = require('./src/config/server');
let telegramBot = require('./src/config/telegramBot');
const webSocket = require('./src/config/webSocket');
const CurrentConnectionInterface = require('./src/config/currentConnection');

/* Prepare server, webSocket and telegramBot */
server.listen(port);
telegramBot = telegramBot(currentUserId, CurrentConnectionInterface);
webSocket(server, telegramBot, CurrentConnectionInterface);