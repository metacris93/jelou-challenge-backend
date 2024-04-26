'use strict';
const { PostSchema, POST_TABLE } = require('../models/post.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(POST_TABLE, PostSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(POST_TABLE);
  }
};
