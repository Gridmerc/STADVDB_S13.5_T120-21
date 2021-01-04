// Modules
const express = require('express');
const mysql = require('mysql');
const port = 5000;

// Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@ssword',
    port: '3306',
    database: 'northwind'
});

// Connect MySQL to the database based from the parameters of the connection

db.connect(function(err) {
    if(err) throw err;
    console.log('MySQL connected successfully...');
});

const app = express();

app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

// This is a sample code for creating a database (schema)

app.get('/createDB', function(req, res) {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, function(err, result) {
        if(err) throw err;
        res.send('Database created...');
        console.log(result);
    });
});

// This is a sample code for creating a table in the chosen dataset

app.get('/createTable', function(req, res) {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result);
        res.send('Table created...');
    });
});

app.get('/getCategories', (req, res) => {
    let query = 'SELECT * FROM CATEGORIES;';
    db.query(query, (err, result) => {
        if(err) throw err;
        console.log('Northwind: ');
        console.log(result);
        res.send(result);
    });
});

app.get('/insertNewCustomer', (req, res) => {
    let customer = {
        customerid: 'HATDG',
        companyname: 'Heil Adolf Titler',
        address: 'Sieg St.',
        region: 'PH',
        postalcode: '69696',
        country: 'Philippines'
    };
    let query = 'INSERT INTO CUSTOMERS SET ?';
    db.query(query, customer, (err, result) => {
        if(err) throw err;
        console.log('New Customer added with ID: ' + result);
        res.send(result);
    });
});

app.get('/', function(req, res) {
    res.render('home');
    //res.send('You are in the home page.');
});

app.listen(port, function() {
    console.log('The application is running at port ' + port);
});