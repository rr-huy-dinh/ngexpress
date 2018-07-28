const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

router.get('/', async (req, res) => {
  const posts = await Posts.find();
  res.json(posts.map(post => post.toJSON()));
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  const post = await new Posts({ title }).save();
  res.json(post.toJSON());
});

router.delete('/:_id', async (req, res) => {
  const { _id } = req.params;
  await Posts.deleteOne({ _id });
  res.send('');
});

module.exports = router;
