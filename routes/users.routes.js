const controller = require('../controllers/users.controller')

const router = app => {

    app.get('/users', controller.getAllUser);

    app.get('/users/:id', controller.getUserById);

    app.post('/users', controller.postNewUser);

    app.put('/users/:id', controller.putUserById);

    app.delete('/users/:id', controller.deleteUserById);
}

module.exports = router;