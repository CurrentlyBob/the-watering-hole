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
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      scientific: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      watering: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sunlight: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      image: {
        type: Sequelize.JSONB
      },
      plantAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      notes: {
        type: Sequelize.STRING
      },
      isFertilized: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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