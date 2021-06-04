const http = require('http');
let {requestListener} = require('./callbackFile.js');


const server = http.createServer(requestListener);

server.listen(8000);