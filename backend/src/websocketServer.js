/* Config params */
const port = 3001;

/* Messages and clients variables (while system is not persisting data) */
let currentUserId = false;

/* Main files and configs */
const server = require('./config/server');
let telegramBot = require('./config/telegramBot');
const webSocket = require('./config/webSocket');
const CurrentConnectionInterface = require('./config/currentConnection');

/* Prepare server, webSocket and telegramBot */
server.listen(port);
telegramBot = telegramBot(currentUserId, CurrentConnectionInterface);
webSocket(server, telegramBot, CurrentConnectionInterface);