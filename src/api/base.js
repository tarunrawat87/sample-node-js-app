const { Router } = require('express')
const app = require('../app')
const router = Router()

class BaseController {
  constructor (baseRoute) {
    this.path = baseRoute
    this._router = router
    app.use(baseRoute, this._router)
  }

  init () {
    throw new Error('Must overide this init method')
  }
}

module.exports = BaseController
