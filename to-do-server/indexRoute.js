const express = require('express');
const fs = require('fs');
const jsdom = require('jsdom');

const toDoList = require('../modules/do-list');
const {JSDOM} = jsdom;
const htmlBuilder = require('./html-builder.js');

const indexRouter = express.Router();

module.exports = indexRouter;

let TDList = new toDoList();
// TDList.newTask('Test Task');
// TDList.newTask('Test 2');


indexRouter.get('/', (request, res, next)=>{
    let code = 200;
    servePage(request, res, next, code);
    
});

indexRouter.post('/', (request, res, next)=>{
    let code = 201;
    TDList.newTask("Post Test");

    servePage(request, res, next, code);

});

indexRouter.delete('/', (request, res, next)=>{
    let code = 200;
    TDList.remove(0);
    servePage(request, res, next, code);
});

function servePage(request, res, next, code){
    fs.readFile('./web-io.html', 'utf-8', (err, data) => {
        if ( err ) {
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.write(`There was an error: ${err}`);
            res.end();
        } else {
            res.writeHeader(code, {'Content-Type': 'text/html'});
            const dom = new JSDOM(data);
            if (TDList.getNumber() > 0 ){
                dom.window.document.getElementById("listContainer").innerHTML = htmlBuilder.build(TDList.getList(), ["title"]);
                res.write(dom.window.document.documentElement.outerHTML);
            } else {
                res.write(data);
            }
            res.end(); 
        }         
    });  
}