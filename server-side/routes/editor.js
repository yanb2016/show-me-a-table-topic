const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const topicService = require('../services/topicService');

router.post('/topics', jsonParser, (req, res) => {
  console.log(res);
  topicService.addTopic(req.body)
    .then(topic => {
      res.json(topic)
    }, (error) => {
      res.status(400).send("topic is existing!")
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