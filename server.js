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