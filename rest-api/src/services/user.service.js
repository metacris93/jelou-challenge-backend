const boom = require('@hapi/boom');
// const bcrypt = require('bcrypt');

const { models } = require('./../libs/sequelize');

class UsersService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    return users;
  }

  async findByUsername(username) {
    const user = await models.User.findOne({
      where: { username },
    });
    return user;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const data = await user.update(changes);
    return data;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}

module.exports = UsersService;