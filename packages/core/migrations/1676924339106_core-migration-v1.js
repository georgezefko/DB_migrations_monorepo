/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('npgusers', {
        id: 'id',
        name: { type: 'varchar(1000)', notNull: true },
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
      })
      pgm.createTable('npgposts', {
        id: 'id',
        userId: {
          type: 'integer',
          notNull: true,
          references: '"users"',
          onDelete: 'cascade',
        },
        body: { type: 'text', notNull: true },
        createdAt: {
          type: 'timestamp',
          notNull: true,
          default: pgm.func('current_timestamp'),
        },
      })
      pgm.createIndex('npgposts', 'userId')
};

exports.down = pgm => {};
