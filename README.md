# IoT-Application-API
T
his repository contains the api for the course application from thematic semester Internet of Things.   
It runs on the Node.js framework Hapi version 17.x.x

## Prerequisites

* [Knex](https://www.npmjs.com/package/knex): >= 0.12.9

## Configurations

### development

* Create a SQLite3, MySQL or Postgres database
* Enter the credentials in knexfile.js
* Run all migrations:
```
     knex migrate:latest
```

### production

production uses a .env file for configurations:
```
NODE_ENV=production

DB_HOST=xxx
DB_USERNAME=xxx
DB_PASSWORD=xxx
DB_NAME=xxx

SERVER_PORT=xxx
SERVER_HOST=xxx
```

## Project setup

```
npm install
```

### Compiles + minifies and starts the server
```
npm start
```

### Run integration tests
```
npm run test
```

### Customize vue/cli configuration

[Configuration Reference](https://cli.vuejs.org/config/)
