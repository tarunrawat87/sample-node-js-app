const User = require('../models/users')

const toJSON = async (promise) => {
  const responseFromDb = await promise
  return responseFromDb.toJSON()
}

const findOne = (queryObj, cols = []) => {
  return toJSON(User.where(queryObj).fetch({ columns: cols }))
}

const create = (initObj) => {
  return new User().save(initObj)
}

module.exports = {
  findOne,
  create
}
