/* Config params */
const port = 3001;

/* Messages and clients variables (while system is not persisting data) */
let currentUserId = false;

/* Main files and configs */
const server = require('./server');
const webSocket = require('./webSocket');
const CurrentConnectionInterface = require('./util/ConnectionInterface');
const telegramBot = require('./telegramBot');

/* Prepare server, webSocket and telegramBot */
server.listen(port);
const telegramBotInstance = telegramBot(currentUserId, CurrentConnectionInterface);
webSocket(server, telegramBotInstance, CurrentConnectionInterface);