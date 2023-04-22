const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
// const db = require('../db/index.js')
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});