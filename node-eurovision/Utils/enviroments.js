const env = require('dotenv');
const path = require('path');

exports.config = (() => {

    console.log(process.env.NODE_ENV)

    let envFile = getEnviromentFile();
    return env.config({
        path: envFile,
        encoding : 'UTF-8'
    })
})

function getEnviromentFile() {
    let envFile;

    switch (process.env.NODE_ENV) {
        case 'DEV':
            envFile = path.resolve(process.cwd(), '.env.dev')
            break;
        case 'TEST':
            envFile = path.resolve(process.cwd(), '.env.test')
            break;
        default:
            envFile = path.resolve(process.cwd(), '.env')      
        break;
    }

    return envFile;
}