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
      res.status(400).send({
        "info": "Topic already existing!",
        "instruction": `Aww yeah, you successfully read this important alert message.
        It seems someone else has already submitted this topic. You can find it via searching or you can click
        the link below to edit your own topic.`,
        "link": "Click here to to eidt"
      })
    })
})

router.put('/topics/:id/:action', jsonParser, (req, res) => {
  id = req.params.id;
  action = req.params.action;
  topicService.handleLikes(id, action)
    .then(topic => {
      res.json(topic)
    }, (error) => {
      res.status(404).send("topic not existing!")
    })
})

module.exports = router;