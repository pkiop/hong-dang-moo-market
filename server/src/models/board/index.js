const { Schema, model } = require('mongoose');

const BoardSchema = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = model('board', BoardSchema);
