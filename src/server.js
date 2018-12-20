'use strict';
import _ from '../env.js';

import Hapi from 'hapi'

import config from '../config.js'
import plugins from './plugins'
import routers from './routers'

import Knex from 'knex'
import { Model } from 'objection'

// create server
const server = Hapi.server({
  host: config.host,
  port: config.port
});

// // Init database connection
Model.knex(Knex(config.database[config.env]));

const startServer = async () => {
  try {
    // register plugins
    await server.register(plugins);

    // add routes
    server.route(routers);
    
    await server.start();

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  
  console.log(`Deploying in ${config.env} environment`);
  console.log('Server running at:', server.info.uri);
};

startServer();

module.exports = server;