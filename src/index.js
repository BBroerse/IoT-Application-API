'use strict';

import Server from './server.js'

async function start() {

    let server;

    try {
        server = await Server.deployment();
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();