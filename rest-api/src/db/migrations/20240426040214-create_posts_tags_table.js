'use strict';
const { PostTagSchema, POST_TAG_TABLE } = require('../models/post_tag.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(POST_TAG_TABLE, PostTagSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(POST_TAG_TABLE);

  }
};
