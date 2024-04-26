const express = require('express');

const router = express.Router();

const TagsService = require('../services/tag.service');
const tagService = new TagsService();

router.get('/', async (req, res) => {
  const tags = await tagService.find();
  res.json(tags);
});
router.post('/', async (req, res) => {
  const body = req.body;
  const tag = await tagService.create(body);
  res.json(tag);
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = await tagService.update(id, body);
  res.json(category);
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await tagService.delete(id);
  res.statusCode = 204;
  res.json();
});

module.exports = router;
