'use strict';
const { TagSchema, TAG_TABLE } = require('../models/tag.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TAG_TABLE, TagSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TAG_TABLE);
  }
};
