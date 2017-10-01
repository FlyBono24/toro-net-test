const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var User = new Schema({
  id: String,
  email: String,
  username: String,
  password: String,
  displayName: String,
  isAdmin: Boolean
})

module.exports = mongoose.model('User', User)
