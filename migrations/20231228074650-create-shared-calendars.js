'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SharedCalendars', {
      ownerID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'userID',
        },
        primaryKey: true,
      },
      viewerID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'userID',
        },
        primaryKey: true,
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
    await queryInterface.dropTable('SharedCalendars');
  }
};