const express = require('express');
const router = express.Router();
const topicService = require('../services/topicService');

router.get('/topics/pagenumber/:pageNumber', function(req, res) {
  const pageNumber = req.params.pageNumber;
  topicService.getTopics(+pageNumber)
    .then(topics => res.json(topics), (error) => {
      console.log(error)
			res.status(400).send(error);
		})
});
router.get('/popularTopics', function(req, res) {
  topicService.getPopularTopic()
    .then(topics => res.json(topics));
});
router.get('/ideas', (req,res) => {
  topicService.getIdeas()
  .then(ideas => res.json(ideas))
})
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