const mysql = require("mysql");
const env = require('dotenv').config();

// создаем соединение с нашей базой данных
const connection = mysql.createConnection({
    port: process.env.PORT_DB,
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB
});

// открываем наше соединение с базой данных
connection.connect(err => {
    if (err) throw error;
    console.log("успешно соединено с базой данных");
});

module.exports = connection;