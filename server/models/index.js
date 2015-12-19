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
      });
    }, // a function which produces all the messages
    post: function ( roomname, message, username ) {
      var sql = 'INSERT INTO `Messages` (`roomname`, `text`, `username`) VALUES (' + roomname +',' + message +','+ username + ')';
      db.connection.query(sql, function(error, results){
        if (error) throw error;
        return results;
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      var sql = 'INSERT INTO `Users` (`username`) VALUES (' + username + ')';
      db.connection.query(sql, function(error, results){
        if (error) throw error;
        return results;
      });
    }
  }
};

// con.query('SELECT * FROM employees',function(err,rows){
//   if(err) throw err;

//   console.log('Data received from Db:\n');
//   console.log(rows);
// });