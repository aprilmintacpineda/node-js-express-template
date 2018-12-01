require('dotenv').config();

const mysql = require('mysql');

function DBConnection () {
  const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  this.query = str => {
    return new Promise((resolve, reject) => {
      pool.query(str, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results, fields);
        }
      });
    });
  };

  return this;
}

module.exports = new DBConnection();
