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
    connection: `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}_test`,
    migrations: {
      tableName: 'migrations'
    }
  },
  
  production: {
    client: 'pg',
    connection: `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    migrations: {
      tableName: 'migrations'
    }
  }
}