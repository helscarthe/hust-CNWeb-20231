'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RepeatedEventsMonthlies', {
      eventID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'eventID',
        },
        primaryKey: true,
      },
      date: {
        type: Sequelize.INTEGER
      },
      endDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RepeatedEventsMonthlies');
  }
};