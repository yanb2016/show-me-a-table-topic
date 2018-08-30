const mongoose = require('mongoose');

const topicSchema = mongoose.Schema ({
  id: Number,
  name: String,
  desc: String,
  category: String,
  likes: Number,
  author: String
});

TopicModel = mongoose.model('TopicModel', topicSchema);

module.exports = TopicModel;