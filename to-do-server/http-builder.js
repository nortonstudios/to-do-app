const fs = require('fs');

module.exports = pageBuilder;

function pageBuilder(){

    fs.readFile('./web-io.html', 'utf-8', (err, data) => {
        if(err){
            return err;
        } else {
            return data;
        }
    });
}
