const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
require('dotenv').config();
const db = require('./db');
const router = require('./network/routes');

db(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.lipiocn.mongodb.net/?retryWrites=true&w=majority`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
  console.log(`La aplicación está escuchando en http://localhost:3000`);
});
