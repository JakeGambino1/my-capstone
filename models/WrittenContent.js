const mongoose = require('mongoose');

const WrittenContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = WrittenContent = mongoose.model(
  'writtenContent',
  WrittenContentSchema
);
