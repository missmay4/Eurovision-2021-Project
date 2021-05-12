// Express
const express = require('express')
let cors = require('cors')
const server = express()
require('./Utils/enviroments').config()
let morganLogger = require('./Utils/logger').morganLogger
let Logger = require('./Utils/logger').Logger
//Middleware cors
server.use(cors())
server.use(morganLogger)
// Database connection
const connection_db = require('./db/conecction_db').connect

// routes
const ParticipantRouter = require('./Routes/ParticipantRouter')
const userRouter = require('./Routes/UserRouter')
//const login = require('./Routes/login').router
const favoritesRouter = require('./Routes/FavoritesRouter')
const votesRouter = require('./Routes/VoteRouter')

connection_db()

// json use for data
server.use(express.json())

// route participant
server.use('/', ParticipantRouter);

// router for users and login
server.use('/users', userRouter);
server.use('/login', require('./Routes/login'));

// router for favorites and votes
server.use('favorites', favoritesRouter)
server.use('votes', votesRouter)

// check if CORS is enabled for participants
server.get('/participants', (request, response, next) => {
    response.json({ msg: 'This is CORS-enabled for all origins!' })
})

server.listen(8080, () => {
    Logger.info("Server starting on localhost:8080")
    Logger.info('CORS-enabled web server listening on port 8080')
});
