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
      host: 'localhost',
      user: 'wausa',
      password: 'MousinDICaus',
      database: 'iot_application_test'
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
