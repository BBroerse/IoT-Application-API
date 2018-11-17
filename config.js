module.exports = {
  env: process.env.NODE_ENV || 'development',
  database: require('./knexfile.js'),
  port: 3001,
  host: 'localhost'
};