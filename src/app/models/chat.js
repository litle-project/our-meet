const mongoose = require('./index');

const schema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    room_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('chats', schema);
