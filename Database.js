const sqlite3 = require('sqlite3').verbose();

// Create/open the database
const db = new sqlite3.Database('mydb.db');

// Create a table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL
    )
  `);
});


module.exports = db;
