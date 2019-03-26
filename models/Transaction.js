const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Transaction = new Schema({

    type: {
        type: String
    },
    montant: {
        type: Number
    },
    description: {
        type: String
    },
    idUser: {
        type: String
    },
    date: {
    type: Date,
    default: Date.now
}

});

module.exports = mongoose.model('transactions', Transaction);
