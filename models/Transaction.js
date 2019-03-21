const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Transaction = new Schema({

    type: {
        type: String
    },
    montant: {
        type: String
    },
    description: {
        type: String
    },
    idUser: {
        type: Number
    },
    date: {
    type: Date,
    default: Date.now
}

});

module.exports = mongoose.model('transactions', Transaction);
