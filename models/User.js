const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String
    },
    name1: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    budget: {
        type: Number
    },
    password: {
        type: String
    },
    date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('users', User);
