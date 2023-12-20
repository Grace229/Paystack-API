const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routers = require('./routes/index');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

routers(app);
/**
 * @swagger
 * /get-category":
 * get:
 * summary: To get all categories
 * description: this is all categories
 * responses:
 * 200:
 */

app.use(logger('dev'));


module.exports = app;