const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  externalId: Number,
  city: String,
  country: String,
});

const User = mongoose.model('User', userSchema, "users");

module.exports = User;
