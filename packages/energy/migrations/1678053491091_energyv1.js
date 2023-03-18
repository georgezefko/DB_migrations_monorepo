/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.createTable('meters', {
        meter_id: 'id',
        name: { type: 'varchar(1000)', notNull: true },
        consumption: {type:'float'},
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
      })
};

exports.down = pgm => {};
