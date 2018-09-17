const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./db/index.js');

const app = express();
// app.use((req, res, next) => {
//   console.log(`now serving ${req.method} at ${req.url}`);
//   next();
// });
app.use(express.static(path.join(__dirname, '../dist')));
// app.use(bodyParser.json({ type: 'application/json' }));

app.listen(3000, () => {
  console.log('listening on port 3000');
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
