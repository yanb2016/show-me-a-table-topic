const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const problemService = require('../services/problemService');
router.get('/problems', function(req, res) {
  problemService.getProblems()
    .then(problems => res.json(problems));
});
router.get('/popularTopics', function(req, res) {
  problemService.getPopularTopic()
    .then(topics => res.json(topics));
});
router.get('/problems/:id', (req, res) => {
  console.log('received!')
  const id = req.params.id;
  problemService.getProblem(+id)
    .then(problem => res.json(problem))
});
router.post('/problems', jsonParser, (req, res) => {
  problemService.addProblem(req.body)
    .then(problem => {
      res.json(problem)
    }, (error) => {
      res.status(400).send("Problem is existing!")
    })
})
router.put('/problems', jsonParser, (req, res) => {
  console.log('request .body')
  console.log(req.body);
  problemService.modifyProblem(req.body)
    .then(problem => {
      res.json(problem)
    }, (error) => {
      res.status(404).send("Problem not existing!")
    })
})
module.exports = router;