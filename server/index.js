const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./db/index.js');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json({ type: 'application/json' }));

app.listen(3000, () => {
  console.log('listening on port 3000');
});

app.get('/rooms:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', '/index.html'));
});

app.get('/reviews', (req, res) => {
  // function that looks thru database and sends back data
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

app.get('/reviews', (req, res) => {
  const arrayOfUsers = {
    data:
      [{
        name: 'John',
        date: 'September 5, 2018',
        message: 'This house was sick!',
      },
      {
        name: 'Tim',
        date: 'September 3, 2018',
        message: 'This house was terrible!',
      },
      {
        name: 'Bob',
        date: 'September 1, 2018',
        message: 'This house was alright.',
      }],
  };

  res.send(arrayOfUsers);
});
