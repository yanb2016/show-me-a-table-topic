const TopicModel = require('../models/topicModel');
const IdeaModel = require('../models/ideaModel');

const getTopics = (pageNumber) => {
  return new Promise ((resolve, reject) => {
    TopicModel.find({})
    .sort({id: 1})
    .skip(pageNumber*10)
    .limit(10)
    .exec(function(err, topics) {
      if(err) {
        reject(err)
      } else {
        if(topics.length === 0) {
          reject('No more topics')
        } else {
          resolve(topics)
        }
      }
    })
  })
};

const getIdeas = () => {
  return new Promise ((resolve, reject) => {
    IdeaModel.find((err, ideas) => {
      if(err) {
        reject(err);
      } else {
        resolve(ideas);
      }
    })
  })
}
const getPopularTopic = () => {
  return new Promise ((resolve, reject) => {
    TopicModel.find((err, topics) => {
      if (err) {
        reject('err!');
      } else {
        resolve(topics);
      }
    })
    .limit(5)
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
          resolve("Topic saved successfully");
        })
      }
    })
  })
}

const handleLikes = (id) => {
  return new Promise ((resolve, reject) => {
    // if thousands of people like this topic at the same time, this would be working then. 
    // I should get the likes from database and then add new likes to it.
    // or I can save the new likes as caches using redis, and then update later.
    // or set the condition, updata to database if the likes reaches a number
    TopicModel.findOneAndUpdate({id: id}, {$inc: {likes: 1}}, {new: true}, function(err, res) {
      if(err) {
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
  handleLikes,
  getPopularTopic,
  getSearchedTopics,
  getIdeas
}
