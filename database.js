const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    database : 'memories_api',
    password : 'root44',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection()
  .then(function(connection) {
    console.log(`Connected to database`);
  })
  .catch(function(error) {
    console.error(error.message);
  });

module.exports = pool;