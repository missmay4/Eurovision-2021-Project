const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = Schema({
    country: {
        type: String,
        require: true
    },
    userID: String,
    date: {
        type: Date,
        default: Date.now
    }
})

exports.favoritesModel = mongoose.model('favorites', favoritesSchema);