const HapiSwagger = require('hapi-swagger');
const Pack = require('../../package');

const options = {
  info: {
    'title': 'Indoor Climate Measurements API Documentation',
    'version': Pack.version,
  }
};

export default {
  plugin: HapiSwagger,
  options: options
}