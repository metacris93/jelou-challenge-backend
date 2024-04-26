'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = await bcrypt.hash('12345678', 10);
    await queryInterface.bulkInsert('users', [
      {
        username: 'foo',
        password,
        name: 'Foo Bar',
        create_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
