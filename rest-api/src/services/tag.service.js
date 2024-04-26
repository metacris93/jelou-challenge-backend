const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom');

class TagsService {
  constructor(){
  }

  async create(data) {
    const tag = await models.Tag.create(data);
    return tag;
  }

  async find() {
    return await models.Tag.findAll({
      order: [['id', 'ASC']],
    });
  }

  async findOne(id) {
    const tag = await models.Tag.findByPk(id);
    if (!tag) {
      throw boom.notFound('tag not found');
    }
    return tag;
  }

  async update(id, changes) {
    const tag = await this.findOne(id);
    return await tag.update(changes);
  }

  async delete(id) {
    const tag = await this.findOne(id);
    await tag.destroy();
  }
}

module.exports = TagsService;
