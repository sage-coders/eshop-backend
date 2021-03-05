const UserRepository = require('../repositories/user-repository');

class UserController {
  static async handleUserCreation(req, res) {
    try {
      const user = req.body;

      const createdUser = await UserRepository.createUser(user);

      return res.status(200).json(createdUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async handleUserGetById(req, res) {
    try {
      const userId = req.params.id;

      const user = await UserRepository.getUserById(userId);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = UserController;
