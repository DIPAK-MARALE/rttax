const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Maximum number of connections in the pool
    host: 'localhost',   // MySQL database host
    user: 'root',        // MySQL database username
    password: 'root',    // MySQL database password
    database: 'taxrx'    // MySQL database name
});

// Function to execute SQL queries
function executeQuery(sql, values) {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    executeQuery
};
