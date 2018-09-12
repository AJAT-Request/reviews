const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reviews',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database is connected.');
  }
});

module.exports = connection;