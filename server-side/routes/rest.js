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

router.get('/topic/:id', (req, res) => {
  const id = req.params.id;
  topicService.getTopic(+id)
    .then(topic => res.json(topic))
});
router.get('/topics/:category', (req, res) => {
  const category = req.params.category;
  topicService.getSearchedTopics(category)
    .then(topics => res.json(topics))
});
module.exports = router;