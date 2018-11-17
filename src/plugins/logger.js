import good from 'good';

export default function (server) {
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

  server.register({
      register: good,
      options
  }, (err) => {});
};