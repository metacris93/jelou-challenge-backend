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
  router.use('/posts',
    passport.authenticate('jwt', { session: false }),
    postsRouter);
  router.use('/tags',
    passport.authenticate('jwt', { session: false }),
    tagsRouter);
  router.use('/categories', 
    passport.authenticate('jwt', { session: false }), 
    categoriesRouter
  );
  router.use('/comments', 
    passport.authenticate('jwt', { session: false }),
    commentsRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
