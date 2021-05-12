const mongoose = require('mongoose');

exports.connect = async () => {
    try {
        mongoose.connect(process.env.DB_URL, {
            useCreateIndex: true,
            useNewUrlParser: true, useUnifiedTopology: true
        })
    } catch (error) {
        process.exit(1)
    }
}

