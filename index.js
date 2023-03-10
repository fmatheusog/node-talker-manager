const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remover
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

const talkerRoutes = require('./routes/talker');
const loginRoutes = require('./routes/login');

app.use(talkerRoutes);
app.use(loginRoutes);

app.listen(PORT, () => {
  console.log('Online');
});
