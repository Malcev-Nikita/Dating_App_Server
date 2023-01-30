const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const usersSchema = new Scheme({
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
});

module.exports = usersSchema;