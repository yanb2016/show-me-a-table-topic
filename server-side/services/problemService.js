const ProblemModel = require('../models/problemModel');

const getProblems = () => {
  return new Promise ((resolve, reject) => {
    ProblemModel.find((err, problems) => {
      if (err) {
        reject('err!');
      } else {
        resolve(problems);
      }
    })
  })
};

const getPopularTopic = () => {
  return new Promise ((resolve, reject) => {
    ProblemModel.find((err, problems) => {
      if (err) {
        reject('err!');
      } else {
        resolve(problems);
      }
    })
    .limit(5)
    .sort({likes: -1})
  })
};

const getProblem =  (id) => {
  return new Promise ((resolve, reject) => {
    ProblemModel.findOne({id: id}, (err, problem) => {
      if (err) {
        reject(err)
      } else {
        resolve(problem);
      }
    })
  })
};

const addProblem = (newProblem) => {
  return new Promise ((resolve, reject) => {
    ProblemModel.findOne({name: newProblem.name}, (err, problem) => {
      if (problem) {
        reject('Existing!');
      } else {
        console.log(newProblem)
        ProblemModel.count({}, (err, count) => {
          newProblem.id = count + 1;
          const mongoProblem = new ProblemModel(newProblem);
          mongoProblem.save();
          resolve(newProblem);
        })
      }
    })
  })
}
const modifyProblem = (newProblem) => {
  return new Promise ((resolve, reject) => {
    ProblemModel.findOneAndUpdate({name: newProblem.name}, {$set: {desc: newProblem.desc, category: newProblem.category}}, {new: true}, function(err, res) {
      if(err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    })

  })
}

module.exports = {
  getProblems,
  getProblem,
  addProblem,
  modifyProblem,
  getPopularTopic
}
