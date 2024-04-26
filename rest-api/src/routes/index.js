const express = require('express');

const postsRouter = require('./posts.router');
const tagsRouter = require('./tags.router');
const categoriesRouter = require('./categories.router');
const commentsRouter = require('./comments.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/posts', postsRouter);
  router.use('/tags', tagsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/comments', commentsRouter);
}

module.exports = routerApi;
