const knex = require('../knex')
const bookshelf = require('bookshelf')(knex)
const { tableNames } = require('../../lib/constants')
const User = bookshelf.model('User', {
  tableName: tableNames.user
})

module.exports = User
