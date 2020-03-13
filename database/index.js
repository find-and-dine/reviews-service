const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'guilt_tripadvisor',
  multipleStatements: true
});

connection.connect((err) => {
  if(!err) {
    console.log('Connected to database');
  } else {
    console.log('Unable to connect to database. ', err);
  }
})