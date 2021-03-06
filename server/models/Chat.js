const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  id: Number,
  name: String,
  chat: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Chat', ChatSchema);