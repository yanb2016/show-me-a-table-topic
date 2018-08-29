const mongoose = require('mongoose');

const problemSchema = mongoose.Schema ({
  id: Number,
  name: String,
  desc: String,
  category: String,
  likes: Number,
  author: String
});

ProblemModel = mongoose.model('ProblemModel', problemSchema);

module.exports = ProblemModel;