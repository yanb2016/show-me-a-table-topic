const TopicModel = require('../models/topicModel');
const IdeaModel = require('../models/ideaModel');

const getTopics = (pageNumber) => {
  return new Promise ((resolve, reject) => {
    TopicModel.find()
    .sort({id: 1})
    .skip(pageNumber*10)
    .limit(10)
    .exec(function(err, topics) {
      if(err) {
        reject(err);
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

const getIdeas = (pageNumber) => {
  return new Promise ((resolve, reject) => {
    IdeaModel.find()
    .sort({idea: 1})
    .skip(pageNumber * 10)
    .limit(10)
    .exec((err, ideas) => {
      if(err) {
        reject(err);
      } else {
        if(ideas.length === 0) {
          reject('No more ideas')
        } else {
          resolve(ideas)
        }
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
    .limit(10)
    .sort({likes: -1})
  })
};
const getSearchedTopics =  (category, pageNumber) => {
  return new Promise ((resolve, reject) => {
    TopicModel.find({category: category})
    .sort({id: 1})
    .skip(pageNumber*8)
    .limit(8)
    .exec((err, topics) => {
      if (err) {
        console.log(err);
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
          resolve({
            "info": "Well done!",
            "instruction":`Aww yeah, you have successfully submitted your topic. 
            Thanks for your contribution, you can click the link below to continue adding more topics.`,
            "link": "Click here to add more"
          });
        })
      }
    })
  })
}

const handleLikes = (id, action) => {
  return new Promise ((resolve, reject) => {
    TopicModel.findOneAndUpdate({id: id}, {$inc: {likes: action}}, {new: true}, function(err, res) {
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
  addTopic,
  handleLikes,
  getPopularTopic,
  getSearchedTopics,
  getIdeas
}
