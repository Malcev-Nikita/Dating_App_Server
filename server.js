const express = require("express");
const app = express();
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const routes = require('./routes/users.routes')


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(process.env.PORT_SERVER, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${process.env.PORT_SERVER}`);
});