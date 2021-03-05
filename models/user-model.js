const { Model, DataTypes } = require('sequelize');
const Connector = require('../app/database-connector');

class UserModel extends Model { }

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: new Connector({}).getConnection(),
  timestamps: true,
  modelName: 'User'
});

module.exports = UserModel;
