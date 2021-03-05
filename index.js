const http = require('http');
const app = require('./app/server');
const config = require('./config/config');

http.createServer(app).listen(config.PORT);
