const mongoose = require('./index');

const schema = new mongoose.Schema(
  {
    room_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    stream: {
      type: String,
      required: true,
    },
    user_agent: {
      type: String,
      required: false,
    },
    video_permission: {
      type: Boolean,
      required: false,
    },
    audio_permission: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('participants', schema);
