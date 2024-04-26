const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class PostsService {
  constructor(){
  }

  async create(data) {
    const post = await models.Post.create(data);
    return post;
  }

  async find() {
    return await models.Post.findAll();
  }

  async findOne(id) {
    const post = await models.Post.findByPk(id);
    if (!post) {
      throw boom.notFound('post not found');
    }
    return post;
  }

  async update(id, changes) {
    const post = await this.findOne(id);
    return await post.update(changes);
  }

  async delete(id) {
    const post = await this.findOne(id);
    await post.destroy();
  }
}

module.exports = PostsService;
