const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@ssword',
    port: '3306',
    database: 'northwind'
});
module.exports = db;