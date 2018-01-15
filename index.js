const express = require('express');
require('dotenv').config();

const bot = require('./src/bot');
const { name, version } = require('./package.json');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (_, res) => res.send({ name, version }));

app.listen(port);
bot.listen();
