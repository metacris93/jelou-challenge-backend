const express = require('express');

const router = express.Router();

const CategoriesService = require('../services/category.service');
const categoryService = new CategoriesService();

/**
 * @swagger
 * /v1/categories:
 *   get:
 *     summary: get categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Successful response
 *
 */
router.get('/', async (req, res) => {
  const categories = await categoryService.find();
  res.json(categories);
});
router.post('/', async (req, res) => {
  const body = req.body;
  const tag = await categoryService.create(body);
  res.json(tag);
});
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await categoryService.update(id, body);
    res.json(category);
  } catch (error) {
    next(error)
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await categoryService.delete(id);
    res.statusCode = 204;
    res.json();
  } catch (error) {
    next(error)
  }
});

module.exports = router;
