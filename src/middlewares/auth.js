const jsonwebtoken = require('jsonwebtoken')
const config = require('../config')
const logger = require('../logger')

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      res.status(401).send()
      return
    }

    const decryptedToken = jsonwebtoken.verify(token, config.get('/jwt/secret'))
    req.userId = decryptedToken.userId

    next()
  } catch (err) {
    logger.error(`UNAUTH_ACCESS =${err} `)
    res.status(401).send()
  }
}

module.exports = authMiddleware
