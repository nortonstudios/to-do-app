const fs = require('fs');

module.exports = {
  requestListener: (req, res) => {
    fs.readFile('./web-io.html',  'utf-8', (err, data) => 
    {
      if (err){
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write(`There was an error: ${err}`);
        res.end();
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end(); 
      }
    })
  }
}