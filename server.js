const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const userRouter = require('./routes/api-users');

const app = express();

const PORT = 3000;
const db = 'mongodb://gen_user:xajlqr88m9@188.225.46.230:27017/default_db?authSource=admin&directConnection=true';

mongoose
    .set("strictQuery", false)
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(methodOverride('_method'));

app.use(userRouter);

app.use((req, res) => {
    console.log("Error")
});