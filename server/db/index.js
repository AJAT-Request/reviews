const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'fec.c2kjpn7usvis.us-west-2.rds.amazonaws.com',
  port: 3306,
  user: 'arjun',
  password: 'hackreactor',
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
