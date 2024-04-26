const express = require('express');

const router = express.Router();

const CommentsService = require('../services/comment.service');
const commentService = new CommentsService();

router.get('/', async (req, res) => {
  const comments = await commentService.find();
  res.json(comments);
});
router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const comment = await commentService.create(body);
    res.json(comment);
  } catch (error) {
    console.error('aqui en el router comments');
    next(error)
  }
});
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const comment = await commentService.update(id, body);
    res.json(comment);
  } catch (error) {
    next(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await commentService.delete(id);
    res.statusCode = 204;
    res.json();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
