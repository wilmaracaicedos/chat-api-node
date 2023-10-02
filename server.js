const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./db');

const router = require('./network/routes');

db(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.lipiocn.mongodb.net/?retryWrites=true&w=majority`);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
