const express = require('express');
const router = express.Router();
const topicService = require('../services/topicService');

router.get('/topics', function(req, res) {
  topicService.getTopics()
    .then(topics => res.json(topics));
});
router.get('/popularTopics', function(req, res) {
  topicService.getPopularTopic()
    .then(topics => res.json(topics));
});

router.get('/topics/:id', (req, res) => {
  const id = req.params.id;
  topicService.getTopic(+id)
    .then(topic => res.json(topic))
});
module.exports = router;