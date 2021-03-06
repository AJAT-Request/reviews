const express = require('express');
const path = require('path');
const connection = require('./db/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(3002, () => {
  console.log('listening on port 3002');
});

app.get('/rooms/:id', (req, res) => {
  // console.log(req.params);
  res.sendFile(path.join(__dirname, '../dist', '/index.html'));
});

app.get('/reviews', (req, res) => {
  const id = Object.keys(req.query)[0];
  const sql = `SELECT * FROM review WHERE listing_id = ${id}`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});
