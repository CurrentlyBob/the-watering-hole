'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plantApiId: {
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      scientific: {
        type: Sequelize.ARRAY
      },
      watering: {
        type: Sequelize.STRING
      },
      sunlight: {
        type: Sequelize.ARRAY
      },
      image: {
        type: Sequelize.JSONB
      },
      plantAmount: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      },
      isFertilized: {
        type: Sequelize.BOOLEAN
      },
      plantLocation: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Plants');
  }
};