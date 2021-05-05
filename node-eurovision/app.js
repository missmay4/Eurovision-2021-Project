// Express
const express = require('express')
var cors = require('cors')
const server = express()

//Middleware cors
server.use(cors())

// Database connection
const connection_db = require('./db/conecction_db').connect

// routes
const ParticipantRouter = require('./Routes/ParticipantRouter').router

connection_db()

// json use for data
server.use(express.json())

// route participant
server.use('/', ParticipantRouter);

// check if CORS is enabled for participants
server.get('/participants', (request, response, next) => {
    response.json({ msg: 'This is CORS-enabled for all origins!' })
})

server.listen(8080, () => {
    console.log("Server starting on localhost:8080")
    console.log('CORS-enabled web server listening on port 8080')
});