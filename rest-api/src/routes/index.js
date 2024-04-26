const express = require('express');
const passport = require('passport');

const postsRouter = require('./posts.router');
const tagsRouter = require('./tags.router');
const categoriesRouter = require('./categories.router');
const commentsRouter = require('./comments.router');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/posts', postsRouter);
  router.use('/tags', tagsRouter);
  router.use('/categories', 
    passport.authenticate('jwt', { session: false }), 
    categoriesRouter
  );
  router.use('/comments', commentsRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
