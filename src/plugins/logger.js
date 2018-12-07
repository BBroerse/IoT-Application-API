const options = {
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{
        log: '*',
        response: '*'
      }]
    }, {
        module: 'good-console'
    }, 'stdout']
  }
};

export default {
  plugin: require('good'),
  options
};