module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'hva',
      password: 'hva',
      database: 'iot_application'
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  test: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME + '_test'
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  
  production: {
    client: 'pg',
    connection: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    migrations: {
      tableName: 'migrations'
    }
  }
}