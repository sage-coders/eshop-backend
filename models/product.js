const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const host = config.DATABASE_HOST;
const sequelize = new Sequelize(config.DATABASE_NAME, config.DATABASE_USERNAME, config.DATABASE_PASSWORD, {
  host,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true
    }
  }
});

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT
    },
    imageURL: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
);
Product.sync();
module.exports = Product;
