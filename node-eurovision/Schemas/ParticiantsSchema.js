const mongoose = require('mongoose')

const ParticiantsSchema = new mongoose.Schema({
    country: {
        code: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        }
    },
    name: {
        type: String,
        require: true
    },
    song: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    song_link: {
        type: String,
        require: true
    },
    language: {
        type: String,
        require: true
    },
    gala: {
        type: {
            type: String,
            require: true
        },
        date: {
            type: String,
            require: true
        },
        performanceOrder: {
            type: Number,
            require: true
        },
        points: Number
    }

});

exports.ParticiantsModel = mongoose.model('participants', ParticiantsSchema);