var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(req);
      models.messages.get(function(err, data) {
        if (err) {
          res.status(500).end();
        } else {
          //res.send('working!', data);
          res.status(200).end(JSON.stringify(data));
        }
      });
      // res.status(200).end();
      // res.status(200).end(JSON.stringify(models.messages.get(function() {

      // })));

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body.roomname, req.body.message, req.body.username, function(err, data) {
        if (err) {
          res.status(400).end();
        } else {
          res.status(201).end('Successful post! Man.');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          res.status(400).end();
        } else {
          res.status(200).end(JSON.stringify(results));
        }
      });
    },
    post: function (req, res) {
      console.log(req.body);
      models.users.post(req.body.username, function(err, data){
        if (err){
          res.status(400).end();
        } else {
          res.status(200).end();
        }
      });
    }
  }
};

