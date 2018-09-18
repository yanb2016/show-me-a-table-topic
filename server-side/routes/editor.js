const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const topicService = require('../services/topicService');

router.post('/topics', jsonParser, (req, res) => {

  topicService.addTopic(req.body)
    .then(message => {
      res.json(message)
    }, (error) => {
      res.status(400).send("Not saved! Topic already existing!")
    })
})

router.put('/topics', jsonParser, (req, res) => {
  topicService.modifyTopic(req.body)
    .then(topic => {
      res.json(topic)
    }, (error) => {
      res.status(404).send("topic not existing!")
    })
})

module.exports = router;