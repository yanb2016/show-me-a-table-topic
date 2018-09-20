const mongoose = require('mongoose');

const ideaSchema = mongoose.Schema ({
  idea: String,
  description: String
});

IdeaModel = mongoose.model('IdeaModel', ideaSchema);

module.exports = IdeaModel;