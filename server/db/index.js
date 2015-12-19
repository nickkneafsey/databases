var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connection = mysql.createConnection({
  user: "root",
  password: "hot",
  database: "chat"
});

exports.connection.connect();


// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : '< MySQL username >',
//   password : '< MySQL password >',
//   database : '<your database name>'
// });

// connection.connect();