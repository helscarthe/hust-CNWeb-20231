'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RepeatedEventsMonthly extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RepeatedEventsMonthly.init({
    eventID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    date: DataTypes.INTEGER,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RepeatedEventsMonthly',
  });
  return RepeatedEventsMonthly;
};