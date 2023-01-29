const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    phone: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    about_me: {
        type: String,
    },
}, { timestamps: true });

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;