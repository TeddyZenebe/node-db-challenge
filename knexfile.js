// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './Data/projectdb.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './Data/migrations'
    },
    seeds: {
      directory: './Data/seeds'
    }
  }
};
