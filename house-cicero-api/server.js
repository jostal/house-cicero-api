const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
let owedAmounts = require('./data/owedAmounts.json');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port %s', server.address().port);
})
