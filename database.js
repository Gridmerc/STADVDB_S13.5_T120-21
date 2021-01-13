// Modules
const mysql = require('mysql');

// Database contain multiple parameters
const db = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b544cbd4569ff0',
    password: 'f05669d5',
    database: 'heroku_25b3344a3871b1e'
});

module.exports = db;