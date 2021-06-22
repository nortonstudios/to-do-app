const express = require('express');
const fs = require('fs');
const jsdom = require('jsdom');
const { stringify } = require('querystring');
const toDoList = require('../modules/do-list');
const {JSDOM} = jsdom;

const indexRouter = express.Router();

module.exports = indexRouter;

let TDList = new toDoList();


indexRouter.get('/', (request, res, next)=>{
    TDList.newTask('Test Task');
    TDList.newTask('Test 2');
    fs.readFile('./web-io.html', 'utf-8', (err, data) => {
        if ( err ) {
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.write(`There was an error: ${err}`);
            res.end();
        } else {
            res.writeHeader(200, {'Content-Type': 'text/html'});
            const dom = new JSDOM(data);
            dom.window.document.getElementById("listContainer").innerHTML = toString(TDList.getList()[0]);
            
            res.write(dom.window.document.documentElement.outerHTML);
            res.end(); 
        }         
    });  

});

indexRouter.post('/', (request, res, next)=>{
    
});

