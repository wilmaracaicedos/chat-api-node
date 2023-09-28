const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', (req, res) => {
  res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send(`Mensaje ${req.body.text} añadido correctamente`);
});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
