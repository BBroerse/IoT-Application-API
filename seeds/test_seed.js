const fs = require('fs');

// $ knex seed:run
exports.seed = function(knex, Promise) {
  const env = process.env.NODE_ENV;

  if(env === 'test') {
    return knex.raw(`COPY measurements(temperature, humidity, co2_ppm) FROM '${__dirname}/measurement_seed.csv' DELIMITER ';' CSV HEADER;`)
  } else {
    console.log('nothing to seed for environment', env)
  }
};
