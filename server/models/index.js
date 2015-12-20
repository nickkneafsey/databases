var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(err, rows){
        if (err) {
          callback(err, null);
        } 
        else {
          callback(null, rows);
        }
      });
    }, // a function which produces all the messages
    post: function (args, callback) {
      var sql = 'INSERT INTO `Messages` (`roomname`, `message`, `username`) VALUES (\'' + args[0] +'\',\'' + args[1] +'\',\''+ args[2] + '\')';
      db.connection.query(sql, function(error, results){
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var sql = 'SELECT * from `Users`';
      db.connection.query(sql, function(err, results){
        if (err){
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (args, callback) {
      var sql = 'INSERT INTO `Users` (`username`) VALUES (\'' + args[0] + '\')';
      console.log(sql);
      db.connection.query(sql, function(error, results){
        if (error){
          callback(error, null);
        } else {
          callback(null, results);
        }
      });
    }
  }
};

// con.query('SELECT * FROM employees',function(err,rows){
//   if(err) throw err;

//   console.log('Data received from Db:\n');
//   console.log(rows);
// });