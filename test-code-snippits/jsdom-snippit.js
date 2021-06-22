const express = require('express');
const fs = require('fs');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const indexRouter = express.Router();

const dom = new JSDOM(`<!DOCTYPE html><p>hello world</p></html>`);
console.log(dom.window.document.querySelector('p').textContent);

module.exports = indexRouter;

const indexPage = JSDOM.fromFile('./index.html').then( dom =>{
    //console.log(dom.window.document.querySelector('html').textContent);
    dom.window.document.getElementById("listContainer").innerHTML = "Test";
    
    console.log(dom.window.document.getElementById("listContainer").textContent);

})


indexRouter.get('/', (request, res, next)=>{
    
    
    // fs.readFile('./web-io.html', 'utf-8', (err, data) => {
    //     if ( err ) {
    //         res.writeHead(400, {'Content-Type': 'text/html'});
    //         res.write(`There was an error: ${err}`);
    //         res.end();
    //     } else {
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         //data.getElementById("listContainer").innerHTML
    //         res.write(data);
    //         res.end(); 
    //     }         
    // });  

})

