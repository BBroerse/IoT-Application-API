'use strict';

require('dotenv').config();

import Hapi from 'hapi'

import glob from 'glob';
import path from 'path';

import config from '../config.js'
import plugins from './plugins'

import Knex from 'knex';
import { Model } from 'objection';

exports.deployment = async () => {

    // create server
    const server = Hapi.server({
      host: config.host,
      port: config.port
    });

    Model.knex(Knex(config.database[config.env]));

    // Require all routers
    glob.sync('./routers/*.js').forEach((router) => {
      console.log(`loading router ${router}`);
      require(path.resolve(router)).default(server);
    });

    // register plugins
    await server.register(plugins);

    // add routes
    //server.route(routes);

    return server;
};