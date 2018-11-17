const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const Pack = require('../../package');

const options = {
  info: {
    'title': 'Indoor Climate Measurements API Documentation',
    'version': Pack.version,
  }
};

export default function (server) {
  server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {});
}