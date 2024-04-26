const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

const PostsService = require('../services/post.service');
const postService = new PostsService();

class CommentsService {
  constructor(){
  }

  async create(data) {
    const { postId } = data;
    await postService.findOne(postId);
    const comment = await models.Comment.create(data);
    return comment;
  }

  async find() {
    return await models.Comment.findAll();
  }

  async findOne(id) {
    const comment = await models.Comment.findByPk(id);
    if (!comment) {
      throw boom.notFound('comment not found');
    }
    return comment;
  }

  async update(id, changes) {
    const comment = await this.findOne(id);
    return await comment.update(changes);
  }

  async delete(id) {
    const comment = await this.findOne(id);
    await comment.destroy();
  }
}

module.exports = CommentsService;
