const mongoose = require('mongoose');

const { Schema } = mongoose;

const mySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model('Message', mySchema);
module.exports = model;
