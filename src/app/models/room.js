const mongoose = require('./index');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    is_instant: {
      type: Boolean,
      required: true,
    },
    meet_time: {
      type: String,
      required: false,
    },
    meet_date: {
      type: Date,
      required: false,
    },
    code: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('rooms', schema);
