const { Router } = require('express');

class BaseRouter {
  constructor() {
    this.router = Router();
  }

  addGetMethod(url, ...middlewareHandlers) {
    this.router.get(url, ...middlewareHandlers);
  }

  addPostMethod(url, ...middlewareHandlers) {
    this.router.post(url, ...middlewareHandlers);
  }
}

module.exports = BaseRouter;
