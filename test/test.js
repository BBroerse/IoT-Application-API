const { expect } = require('code');
const Lab = require('lab');
const { describe, it, before } = exports.lab = Lab.script();

const server = require('../src/server');

describe("/measurements", () => {

  it('return all measurements', async () => {   

    let options = {
      method: 'GET',
      url: '/measurements'
    };

    const response = await server.inject(options);
    expect(response.statusCode).to.equals(200)
    expect(response.result).to.be.an.array();
  });

  it('return the last measurements', async () => {   

    let options = {
      method: 'GET',
      url: '/measurements/latest'
    };

    const response = await server.inject(options);
    expect(response.statusCode).to.equals(200)
    expect(response.result).to.be.an.object();
  });

});