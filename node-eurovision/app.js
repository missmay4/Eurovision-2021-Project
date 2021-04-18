// Express
const express = require('express')
const server = express()

// Database connection
const connection_db = require('./db/conecction_db').connect

// routes
const ParticipantRouter = require('./Routes/ParticipantRouter').router

connection_db()
// json use for data
server.use(express.json())

// route participant
server.use('/', ParticipantRouter);

server.listen(8080, () => {
    console.log("Server starting on localhost:8080");

});