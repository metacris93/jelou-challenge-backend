const express = require('express');

const router = express.Router();

const PostsService = require('./../services/post.service');
const postService = new PostsService();

router.get('/', async (req, res, next) => {
  try {
    const posts = await postService.find(req.query);
    res.json(posts);
  } catch (error) {
    next(error);
  }
});
router.post('/', async (req, res) => {
  const body = req.body;
  const post = await postService.create(body);
  res.json(post);
});
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const post = await postService.update(id, body);
    res.json(post);
  } catch (error) {
    next(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await postService.delete(id);
    res.statusCode = 204;
    res.json();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
