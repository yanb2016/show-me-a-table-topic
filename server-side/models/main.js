const mongoose = require('mongoose');

module.exports.connect = (uri, option) => {
  mongoose.connect(uri,  option);
  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: $(err)`);
    process.exit(1);
  })
  require('./user');
};