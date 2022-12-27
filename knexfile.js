// Update with your config settings.


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const store = require("./src/config")

module.exports = {

  development: {
    client: 'mysql2',
    connection: store.get("/connection"),
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
