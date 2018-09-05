const TopicModel = require('../models/topicModel');

const getTopics = () => {
  return new Promise ((resolve, reject) => {
    TopicModel.find((err, topics) => {
      if (err) {
        reject('err!');
      } else {
        resolve(topics);
      }
    })
  })
};

const getPopularTopic = () => {
  return new Promise ((resolve, reject) => {
    TopicModel.find((err, topics) => {
      if (err) {
        reject('err!');
      } else {
        resolve(topics);
      }
    })
    .limit(8)
    .sort({likes: -1})
  })
};

const getTopic =  (id) => {
  return new Promise ((resolve, reject) => {
    TopicModel.findOne({id: id}, (err, topic) => {
      if (err) {
        reject(err)
      } else {
        resolve(topic);
      }
    })
  })
};

const getSearchedTopics =  (category) => {
  return new Promise ((resolve, reject) => {
    TopicModel.find({category: category}, (err, topics) => {
      if (err) {
        reject(err)
      } else {
        resolve(topics);
      }
    })
  })
};

const addTopic = (newTopic) => {
  return new Promise ((resolve, reject) => {
    TopicModel.findOne({name: newTopic.name}, (err, topic) => {
      if (topic) {
        reject('Existing!');
      } else {
        TopicModel.count({}, (err, count) => {
          newTopic.id = count + 1;
          const mongoTopic = new TopicModel(newTopic);
          mongoTopic.save();
          resolve(newTopic);
        })
      }
    })
  })
}
const modifyTopic = (newTopic) => {
  return new Promise ((resolve, reject) => {
    TopicModel.findOneAndUpdate({name: newTopic.name}, {$set: {desc: newTopic.desc, category: newTopic.category}}, {new: true}, function(err, res) {
      if(err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    })

  })
}

module.exports = {
  getTopics,
  getTopic,
  addTopic,
  modifyTopic,
  getPopularTopic,
  getSearchedTopics
}
