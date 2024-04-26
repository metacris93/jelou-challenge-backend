'use strict';
const { PostCategorySchema, POST_CATEGORY_TABLE } = require('../models/post_category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(POST_CATEGORY_TABLE, PostCategorySchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(POST_CATEGORY_TABLE);

  }
};
