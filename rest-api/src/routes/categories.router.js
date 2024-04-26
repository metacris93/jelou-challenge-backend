const express = require('express');

const router = express.Router();

const CategoriesService = require('../services/category.service');
const categoryService = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await categoryService.find();
  res.json(categories);
});
router.post('/', async (req, res) => {
  const body = req.body;
  const tag = await categoryService.create(body);
  res.json(tag);
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = await categoryService.update(id, body);
  res.json(category);
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await categoryService.delete(id);
  res.statusCode = 204;
  res.json();
});

module.exports = router;
