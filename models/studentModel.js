const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../connection')

class Student extends Model {}

Student.init({
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  qualification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {

  sequelize, // We need to pass the connection instance
  modelName: 'Student' // We need to choose the model name
});


module.exports = Student