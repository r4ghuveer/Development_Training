const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');

app.use(homeRoute);
app.use(userRoute);

app.listen(3000);