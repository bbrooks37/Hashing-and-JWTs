require('dotenv').config();
const { Client } = require("pg");

// Debug prints to verify environment variables
console.log('DB_URI:', process.env.DATABASE_URL);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', typeof process.env.DB_PASSWORD, process.env.DB_PASSWORD);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'messagely',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to the database');
  }
});

module.exports = client;
