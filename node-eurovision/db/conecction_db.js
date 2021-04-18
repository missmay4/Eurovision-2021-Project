const mongoose = require('mongoose');

exports.connect = async () => {
    try {
        mongoose.connect('mongodb+srv://admin:J2y3OYTjC1lieo1Z@cluster0.xrhib.mongodb.net/eurovision-2021-db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (error) {
        process.exit(1)
    }
}

