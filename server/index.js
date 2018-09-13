const express = require('express');
const path = require('path');
// const faker = require('faker');

const app = express();
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/rooms:roomId', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', '/index.html'));
});

app.get('/users', (req, res) => {
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

app.listen(3000, () => {
  console.log('listening on port 3000');
});
