module.exports = {
  env: process.env.NODE_ENV || 'development',
  database: require('./datasources.js'),
  port: 3001,
  host: 'localhost'
};