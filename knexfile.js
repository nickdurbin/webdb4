module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipes.db3'
    }, 
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foriegn_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }

  },

};