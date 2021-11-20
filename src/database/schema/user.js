const mongoose = require('../index');

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    device_id: {
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

module.exports = mongoose.model('Users', usersSchema);
