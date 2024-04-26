const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');

class CategoriesService {
  constructor(){
  }

  async create(data) {
    const category = await models.Category.create(data);
    return category;
  }

  async find() {
    return await models.Category.findAll();
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    return await category.update(changes);
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
  }
}

module.exports = CategoriesService;
