const mongoose = require('mongoose');

const WrittenContentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = WrittenContent = mongoose.model(
  'writtenContent',
  WrittenContentSchema
);
