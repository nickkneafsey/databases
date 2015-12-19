var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("/" + route) // /messages
    .get(controllers[route].get) //messages.get
    .post(controllers[route].post);
}

module.exports = router;

// /messages, controllers.messages.get
// /messages, controllers.messages.post
// /users, controllers.users.get
// /users, controllers.users.post
// req.body has info of postrequest --> raw { username: 'as', text:...}