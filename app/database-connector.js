const { Sequelize } = require('sequelize');
const config = require('../config/config');

class Connector {
  constructor({
    host = config.DATABASE_HOST,
    database = config.DATABASE_NAME,
    username = config.DATABASE_USERNAME,
    password = config.DATABASE_PASSWORD
  }) {
    this.connection = new Sequelize(database, username, password, {
      host,
      dialect: 'mssql',
      dialectOptions: {
        options: {
          encrypt: true
        }
      }
    });

    this.connection.sync();
  }

  getConnection() {
    return this.connection;
  }
}

module.exports = Connector;
