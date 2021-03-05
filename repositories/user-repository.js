const UserModel = require('../models/user-model');

class UserRepository {
  static createUser(user) {
    return UserModel.create(user);
  }

  static getUserById(id) {
    return UserModel.findByPk(id);
  }
}

module.exports = UserRepository;
