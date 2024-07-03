const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O usuário deve ter um nome'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'O usuário deve ter um e-mail'],
    unique: true,
    trim: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
