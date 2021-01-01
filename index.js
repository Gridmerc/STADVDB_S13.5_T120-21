// Modules
const express = require('express');
const mysql = require('mysql');
const port = 5000;

var path = require('path');

// Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@ssword',
    port: '3306',
    database: 'northwind'
});

db.connect(function(err) {
    if(err) throw err;
    console.log('MySQL connected successfully...');
});

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function() {
    console.log('The application is running at port ' + port);
});