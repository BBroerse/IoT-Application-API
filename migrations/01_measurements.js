'use strict';

exports.up = (knex, Promise) => {
  return knex.schema
    .createTable('measurements', (table) => {
      table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultsTo(knex.raw("uuid_generate_v4()"))

      table
        .decimal('temperature')
        .notNullable()

      table
        .decimal('humidity')
        .notNullable()

      table
        .decimal('co2_ppm')
        .notNullable()

        table
          .timestamp('created_at').defaultTo(knex.fn.now());
    })

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('measurements')
  ]);
};