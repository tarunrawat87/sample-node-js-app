const tableNames = {
  user: 'users'
}

const PORT_NO = 4000

const TOKEN_CONFIG = {
  expiry: '1d',
  aud: 'http://localhost:4000'
}

module.exports = {
  tableNames,
  PORT_NO,
  TOKEN_CONFIG
}
