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
