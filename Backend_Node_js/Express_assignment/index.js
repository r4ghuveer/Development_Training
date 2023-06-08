const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const homeData = require('./routes/home');
const userRoute = require('./routes/user');

app.use(homeData.routes);
app.use(userRoute);

app.listen(3000);