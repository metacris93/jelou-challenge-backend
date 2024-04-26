'use strict';
const { CommentSchema, COMMENT_TABLE } = require('../models/comment.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(COMMENT_TABLE, CommentSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(COMMENT_TABLE);
  }
};
