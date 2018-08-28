const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const problemService = require('../services/problemService');
router.get('/problems', function(req, res) {
  problemService.getProblems()
    .then(problems => res.json(problems));
});
router.get('/problems/:id', (req, res) => {
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
  problemService.modifyProblem(req.body)
    .then(problem => {
      res.json(problem)
    }, (error) => {
      res.status(404).send("Problem not existing!")
    })
})
module.exports = router;