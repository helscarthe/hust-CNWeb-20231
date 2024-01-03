'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RepeatedEvents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RepeatedEvents.init({
    eventID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    dayToRepeat: DataTypes.INTEGER,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'RepeatedEvents',
  });
  return RepeatedEvents;
};