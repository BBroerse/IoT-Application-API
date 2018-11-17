'use strict';

import Hapi from 'hapi'

import glob from 'glob';
import path from 'path';

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

// Require all plugins
glob.sync('./plugins/*.js').forEach((plugin) => {
  console.log(`loading plugin ${plugin}`);
  require(path.resolve(plugin)).default(server);
});

// Require all routers
glob.sync('./routers/*.js').forEach((router) => {
  console.log(`loading router ${router}`);
  require(path.resolve(router)).default(server);
});

// Require all resources
glob.sync('./resources/*.js').forEach((resource) => {
  console.log(`loading resource ${recourse}`);
  require(path.resolve(resource)).default(server);
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();