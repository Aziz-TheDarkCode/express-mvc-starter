const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const app = express();

//Register middlewares

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//Register routes
app.use('/',routes)

module.exports = app