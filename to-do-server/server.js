const http = require('http');
let {requestListener} = require('./callbackFile.js');

const PORT = 8000;
const server = http.createServer(requestListener);

server.listen(PORT, ()=>{
    console.log(`Server now listening on port: ${PORT}.`);
});