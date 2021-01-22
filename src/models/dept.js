'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dept.init({
    deptName: DataTypes.STRING,
    deptAddress: DataTypes.STRING,
    deptArea: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dept',
  });
  return Dept;
};