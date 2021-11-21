const mongoose = require('./index');

const schmea = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    device: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('users', schmea);
