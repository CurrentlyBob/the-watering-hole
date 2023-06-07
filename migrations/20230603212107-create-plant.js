'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      plantApiId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      common_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scientific_name: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      watering: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sunlight: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      default_image: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      plantAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      plantLocation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Plants')
  },
}
