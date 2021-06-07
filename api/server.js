const express = require("express");
const accountsRouter = require('./accounts/accounts-router')
const server = express();

server.use(express.json());
server.use('/api/acounts', accountsRouter)
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'Something broke :(' })
})

module.exports = server;