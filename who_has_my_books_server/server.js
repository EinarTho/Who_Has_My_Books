require('dotenv').config();
const express = require('express');
const app = express();
const port = 8080;
const router = require('./routes/routes');
const bodyParser = require('body-parser');

const db = require('./model/db');
db.connect();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.listen(port, () => {
  console.log('listening on ' + port);
});

app.use('/api', router);

//to do:
//make a database
//make routes
//make registration logic
