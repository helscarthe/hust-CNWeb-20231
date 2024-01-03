'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RepeatedEventsYearly extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RepeatedEventsYearly.init({
    eventID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    date: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RepeatedEventsYearly',
  });
  return RepeatedEventsYearly;
};