const express = require('express');
const fs = require('fs');
const jsdom = require('jsdom');

const toDoList = require('../modules/do-list');
const {JSDOM} = jsdom;
const htmlBuilder = require('./html-builder.js');

const indexRouter = express.Router();

module.exports = indexRouter;

let TDList = new toDoList();
TDList.newTask('Test Task');
TDList.newTask('Test 2');


indexRouter.get('/', (req, res, next)=>{
    let code = 200;
    servePage(req, res, next, code);
    
});

indexRouter.post('/', (req, res, next)=>{
    let code = 201;
    //TDList.newTask("Post Test");
    console.log(req.body);
    //console.log(req.body.title);
    TDList.newTask(req.body.title);

    servePage(req, res, next, code);

});

indexRouter.delete('/', (req, res, next)=>{
    let code = 200;
    console.log(req.body);
    TDList.remove(req.body.index);
    servePage(req, res, next, code);
});

function servePage(req, res, next, code){
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