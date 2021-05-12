let winston = require('winston')
let morgan = require('morgan')
let fs = require('fs')
let path = require('path')

var accessLogStream = fs.createWriteStream(path.resolve(process.cwd(), 'server.log'), { flags: 'a' })


const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
)

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.resolve(process.cwd(), '.log') }),
]

const Logger = winston.createLogger({
    level: levels.error,
    levels,
    format,
    transports,
})

exports.morganLogger = morgan('combined', { stream: accessLogStream })
exports.Logger = Logger
