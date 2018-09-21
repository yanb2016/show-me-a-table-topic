const express = require('express');
const router = express.Router();
const topicService = require('../services/topicService');

router.get('/topics/pagenumber/:pageNumber', function(req, res) {
  const pageNumber = req.params.pageNumber;
  topicService.getTopics(+pageNumber)
    .then(topics => res.json(topics), (error) => {
			res.status(400).send(error);
		})
});
router.get('/popularTopics', function(req, res) {
  topicService.getPopularTopic()
    .then(topics => res.json(topics));
});
router.get('/ideas/pagenumber/:pageNumber', (req,res) => {
  const pageNumber = req.params.pageNumber;
  topicService.getIdeas(pageNumber)
  .then(ideas => res.json(ideas), (error) => {
    console.log(error)
    res.status(400).send(error);
  })
});
router.get('/topics/:category/:pageNumber', (req, res) => {
  const category = req.params.category;
  const pageNumber= req.params.pageNumber;
  topicService.getSearchedTopics(category, pageNumber)
    .then(topics => res.json(topics), (error) => {
      console.log(error)
      res.status(400).send(error);
    })
});
module.exports = router;