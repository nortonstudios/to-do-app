const express = require('express');
const fs = require('fs');
const jsdom = require('jsdom');

const toDoList = require('../modules/do-list');
const {JSDOM} = jsdom;
const htmlBuilder = require('./html-builder.js');

const indexRouter = express.Router();

module.exports = indexRouter;

let TDList = new toDoList();
//TDList.newTask('Test Task', 'First test task.');
//TDList.newTask('Test 2', 'Second test task.');


indexRouter.get('/', (req, res, next)=>{
    let code = 200;
    servePage(req, res, next, code);
    
});

indexRouter.post('/', (req, res, next)=>{
    console.log(req.body);
    if(req.body.title){
        let code = 201;
        TDList.newTask(req.body.title, req.body.description, req.body.priority);
        servePage(req, res, next, code);
    } else {
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write(`invalid title. ${req.body}`);
        res.end();
    }
});

indexRouter.delete('/', (req, res, next)=>{
    console.log(req.body);
    if (typeof req.body.index === 'number'){
        let code = 204;
        TDList.remove(req.body.index);
        servePage(req, res, next, code);
    } else {
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write(`invalid index. ${req.body}`);
        res.end();
    }
});

function servePage(req, res, next, code){
    fs.readFile('./web-io.html', 'utf-8', (err, data) => {
        if ( err ) {
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.write(`There was an error: ${err}`);
            res.end();
        } else {
            res.writeHeader(code, {'Content-Type': 'text/html'});
            if(code === 200){
                const dom = new JSDOM(data);
                if (TDList.getNumber() > 0 ){
                    dom.window.document.getElementById("listContainer").innerHTML = htmlBuilder.build(TDList.getList(), ["title", "description", "priority"]);
                    res.write(dom.window.document.documentElement.outerHTML);
                } else {
                    res.write(data);
                }
            }
            res.end(); 
        }         
    });  
}