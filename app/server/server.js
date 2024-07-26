const express = require('express');

const server = express();

server.get('/home', (req, res)=>{
    res.send("You Are Home")
})