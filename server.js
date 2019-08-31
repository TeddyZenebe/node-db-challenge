const express = require('express');

const router = require('./project-router')
const server = express();

server.use(express.json());
server.use('/api/project',router)

server.get('/',(req, res)=>{
    res.send('<h2>project API</h2>')
})

module.exports = server;