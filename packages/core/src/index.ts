// module.exports = function getDate(
//   locale = 'en-US',
//   options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
// ) {
//   return new Date().toLocaleDateString(locale, options);
// };

console.log("trekse mpourdelo")

const migrate = require("postgres-migrations")
const pg = require('pg')

async function migration(): Promise<void>{
  const dbConfig = {
    database: "hr",
    user: "newuser",
    password: "1234",
    host: "localhost",
    port: 5432,
  }

  // Optional. Defaults to "public" schema and "migrations" table
//   const optionalConfig = {
//     schemaName: 'myCustomSchema',
//     tableName: 'myCustomMigrationsTableName',
//   }

const migrations_path = require( "migrations/" )
console.log(migrations_path)
// Note: when passing a client, it is assumed that the database already exists
  const client = new pg.Client(dbConfig) // or a Pool, or a PoolClient
  await client.connect()
  try {
    await migrate({client}, "migrations/")
  } finally {
    await client.end()
  }
}