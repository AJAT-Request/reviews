const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  port: 3306,
  user: '',
  password: '',
  database: '',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database is connected.');
  }
});

module.exports = connection;
