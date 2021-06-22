const http = require('http');
const express = require('express');
const app = express();

const PORT = 8000;

const indexRouter = require('./indexRoute.js');
app.use('/', indexRouter);

app.listen(PORT, ()=>{
    console.log(`Server now listening on port: ${PORT}.`);
});