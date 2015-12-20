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
          res.json(data);
          // res.status(200).end(JSON.stringify(data));
          // res.json(data);
          // res.end();
        }
      });
      // res.status(200).end();
      // res.status(200).end(JSON.stringify(models.messages.get(function() {

      // })));

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      var args = [req.body.roomname, req.body.message, req.body.username];
      models.messages.post(args, function(err, data) {
        console.log('body props: body:', req.body.roomname, 'msg', req.body.message, 'username', req.body.username )
        if (err) {
          res.status(400).end();
        } else {

          res.status(201).end('Posted message');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          res.status(500).end();
        } else {
          res.json(results);
          // res.status(200).end(JSON.stringify(results));
        }
      });
    },
    post: function (req, res) {
      console.log(req.body);
      var args = [req.body.username];
      models.users.post(args, function(err, data){
        if (err){
          res.status(400).end();
        } else {
          res.status(201).end();
        }
      });
    }
  }
};

