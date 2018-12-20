const fs = require('fs');

// $ knex seed:run
exports.seed = function(knex, Promise) {
  const env = process.env.NODE_ENV;

  if(env === 'test') {
    return knex.raw("COPT measurements(temperature, humidity, co2_ppm, created_at) FROM './seeds/measurement_seed.csv' DELIMITER ',' CSV HEADER;")
  } else {
    console.log('nothing to seed for environment', env)
  }
};
