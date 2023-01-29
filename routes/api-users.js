const express = require('express');
const { getUsers } = require('../controllers/users-controller')

const userRouter = express.Router();


// Проверка пользователя в БД
userRouter.get('/api/check_for_registered_user', getUsers);

// Добавление нового пользователя в БД
userRouter.post('/api/adding_a_new_user');

// Проверка на присутствие номера в БД для восстановления пароля
userRouter.get('/api/password_recovery_number_verification');

module.exports = userRouter;