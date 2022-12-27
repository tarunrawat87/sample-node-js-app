

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require("./logger");

app.use(cors());


module.exports = app;

