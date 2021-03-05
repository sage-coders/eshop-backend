const BaseRouter = require('./base-router');
const UserController = require('../controllers/user-controller');

class UserRouter extends BaseRouter {
  constructor() {
    super();
    this.addPostMethod('/', UserController.handleUserCreation);
    this.addGetMethod('/:id', UserController.handleUserGetById);
  }
}

module.exports = new UserRouter();
