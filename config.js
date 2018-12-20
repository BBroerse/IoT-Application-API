module.exports = {
  env: process.env.NODE_ENV || 'development',
  database: require('./knexfile.js'),
  port: process.env.SERVER_PORT || 3001,
  host: process.env.SERVER_HOST || 'localhost'
};