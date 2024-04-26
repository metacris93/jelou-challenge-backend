const express = require('express');

const router = express.Router();

const PostsService = require('./../services/post.service');
const postService = new PostsService();

router.get('/', async (req, res) => {
  const posts = await postService.get();
  res.json(posts);
});

module.exports = router;
