<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const env = require('dotenv').config();

const app = express();

//делаем наш парсинг в формате json
app.use(bodyParser.json());

// парсит запросы по типу: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//  простой response - request
app.get("/", (req, res) => {
  res.json({ message: "API" });
});

// установить порт, и слушать запросы
app.listen(process.env.PORT_SERVER, () => {
  console.log(`Сервер запущен ${process.env.PORT_SERVER} на порту`);
});
=======
const express = require('express');
const path = require('path')

const app = express();


// Отдаем стандартную фавиконку, можем здесь же свою задать
// app.use(express.favicon());

// Выводим все запросы со статусами в консоль
// app.use(express.logger('dev')); 

// Стандартный модуль, для парсинга JSON в запросах
// app.use(express.bodyParser()); 

// Поддержка put и delete
// app.use(express.methodOverride()); 

// Модуль для простого задания обработчиков путей
// app.use(app.router); 

// Запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)
app.use(express.static(path.join(__dirname, "public"))); 

app.get('/api', (req, res) => {
    res.send('API is running');
});

app.listen(process.env.PORT_SERVER, (error) => {
  error ? console.log('Error') : console.log("Сервер запущен");
})
>>>>>>> 618616a22ad79d19ea2adc93a5ebb9d74a4cdc7b
