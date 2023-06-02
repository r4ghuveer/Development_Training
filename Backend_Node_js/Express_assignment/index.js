const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const homeRoute = require('./routes/home.js');
const userRoute = require('./routes/user.js');

app.use(homeRoute);
app.use(userRoute);

app.listen(3000);