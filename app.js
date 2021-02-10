const config = require('./config');
const mongoose = require('mongoose');
const setupController = require('./controllers/setupControllers');
const apiController = require('./controllers/apiController');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/public/src'));

mongoose.connect(config.getDbConnection());

setupController(app);
apiController(app);

app.listen(port);