"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plant.hasMany(models.Profile, { foreignKey: "profileId" });
    }
  }
  Plant.init(
    {
      plantApiId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scientific: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      watering: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sunlight: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      image: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      plantAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isFertilized: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      plantLocation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Profiles",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Plant",
    }
  );
  return Plant;
};
