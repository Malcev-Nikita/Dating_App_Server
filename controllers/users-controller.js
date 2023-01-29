const Users = require('../models/users');

const handleError = (res, error) => {
    res.status(500).send(error.message);
}

const getUsers = (req, res) => {
    console.log("API")
    Users 
        .find()
        .then((users) => res.status(200).json(users))
        .catch((error) => handleError(res, error));
}

module.exports = { getUsers }