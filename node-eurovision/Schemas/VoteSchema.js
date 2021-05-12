const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = Schema({
    country: {
        type: String,
        require: true
    },
    userID: String,
    gala: {
        type: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            require: true
        }
    },
    order: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        require: true
    }

})

exports.voteModel = mongoose.model('votes', voteSchema);