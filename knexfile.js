// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/dev.db3'
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  // production: {
  //   client: 'pg',
  //   useNullAsDefault: true,
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: __dirname + "/database/migrations"
  //   },
  //   seeds: {
  //     directory: __dirname + "/database/seeds/"
  //   }
  // }

};
