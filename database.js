const mysql = require('mysql');
/*
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@ssword',
    port: '3306',
    database: 'creditcards'
});
*/

const db = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b544cbd4569ff0',
    password: 'p@f05669d5',
    port: '3306',
    database: 'heroku_25b3344a3871b1e'
});

module.exports = db;
