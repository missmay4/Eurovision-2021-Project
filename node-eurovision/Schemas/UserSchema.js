const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Roles
const roles = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} no es un rol válido'
}

const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    country: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'USER', enum: roles
    }
});

// Validator
userSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Delete password from JSON response 
userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

exports.userModel = mongoose.model('users', userSchema);