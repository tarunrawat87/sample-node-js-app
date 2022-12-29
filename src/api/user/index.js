
const BaseController = require('../base')
const controller = require('./controller')
const { authMiddleware } = require('../../middlewares')
class UserApi extends BaseController {
  constructor () {
    super('/api/v1/user')
  }

  init () {
    this._router.post('/login', controller.loginUser)
    this._router.post('/', controller.registerUser)
    this._router.get('/', authMiddleware, controller.getUserProfile)
  }
}

module.exports = new UserApi()
