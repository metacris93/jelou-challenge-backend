const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');


class PostsService {
  constructor(){
  }

  async create(data) {
    const { categories, tags } = data
    const post = await models.Post.create(data);
    if (categories) {
      await models.PostCategory.bulkCreate(categories.map(categoryId => ({ postId: post.id, categoryId })));
    }
    if (tags) {
      await models.PostTag.bulkCreate(tags.map(tagId => ({ postId: post.id, tagId })));
    }
    return post;
  }

  async find(query) {
    let { categories, tags } = query;
    if (!Array.isArray(categories)) {
      categories = [categories]
    }
    if (!Array.isArray(tags)) {
      tags = [tags]
    }
    categories = categories.filter(e => e);
    tags = tags.filter(e => e);
    let includeOptions = [];
    if (categories && categories.length > 0) {
      includeOptions.push({
        association: 'categories',
        where: {
          id: {
            [Op.in]: categories
          }
        },
        through: { attributes: [] }
      });
    } else if (tags && tags.length > 0) {
      includeOptions.push({
        association: 'tags',
        where: {
          id: {
            [Op.in]: tags
          }
        },
        through: { attributes: [] }
      });
    }
    return await models.Post.findAll({
      include: includeOptions
    });
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
    const { categories, tags } = changes;
    const categoriesResult = await models.PostCategory.findAll(
      {
        where: {
          categoryId: {
            [Op.in]: categories
          }
        }
      }
    );
    const newPostsCategories = categories
      .filter(categoryId => !categoriesResult.find(category => category.categoryId === categoryId))
      .map(categoryId => ({ postId: post.id, categoryId }));
    await models.PostCategory.bulkCreate(newPostsCategories);

    const tagsResult = await models.PostTag.findAll(
      {
        where: {
          tagId: {
            [Op.in]: tags
          }
        }
      }
    );
    const newPostsTags = tags
      .filter(tagId => !tagsResult.find(tag => tag.tagId === tagId))
      .map(tagId => ({ postId: post.id, tagId }));
    await models.PostTag.bulkCreate(newPostsTags);

    return await post.update(changes);
  }

  async delete(id) {
    const post = await this.findOne(id);
    await post.destroy();
  }
}

module.exports = PostsService;
