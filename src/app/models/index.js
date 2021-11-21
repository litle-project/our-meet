const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: false,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.info('connection error', err);
});

db.once('open', () => {
  console.log('connection to mongodb success');
});

module.exports = mongoose;
