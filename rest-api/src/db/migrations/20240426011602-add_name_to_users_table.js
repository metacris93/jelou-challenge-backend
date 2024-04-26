'use strict';
const { UserSchema, USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(USER_TABLE, 'name', UserSchema.name);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn(USER_TABLE, 'name');
  }
};
