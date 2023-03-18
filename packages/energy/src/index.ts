const { default: PgMigrate } = require('node-pg-migrate');
const path = require('path');
const pg = require('pg');

async function migration() {
  const config = {
    database: 'hr',
    user: 'newuser',
    password: '1234',
    host: 'localhost',
    port: 5432,
    migrationsTable: 'migrations',
    dir: path.join(__dirname,"..", 'migrations'),
  };

  const client = new pg.Client(config);
  await client.connect();

  try {
    await PgMigrate({
      direction: 'up',
      databaseUrl: config,
      dir: config.dir,
      migrationsTable: config.migrationsTable,
    });
  } finally {
    await client.end();
  }
}

migration();

