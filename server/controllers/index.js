var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //models.messages.get
      res.status(200).end(JSON.stringify(models.messages.get()));

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('requesting', req);
      models.messages.post(req.body.roomname, req.body.message, req.body.username);
      res.status(201).end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      console.log('requesting', req);
      models.messages.post(req.body.username);
      res.status(201).end();
    }
  }
};

