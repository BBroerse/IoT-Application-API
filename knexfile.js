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

  staging: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: 'migrations'
    }
  }
}
