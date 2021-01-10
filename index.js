// Modules
const express = require('express');
const handlebars = require('handlebars');
const path=require('path');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const hbs = require('express-handlebars').create({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});

//const bodyparser = require('body-parser');
const port = 5000;
const app = express();
const PublicRoutes = require('./routes/PublicRoutes');

// Connect MySQL to the database based from the parameters of the connection
const db = require('./database');

db.connect(function(err) {
    if(err) throw err;
    console.log('MySQL connected successfully...');
});

//api enpoint data handling
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

//app.set('view engine', 'hbs');

//setting up view engine
app.engine('hbs', hbs.engine); 

app.set('view engine', 'hbs');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use('/', PublicRoutes);
app.listen(port, function() {
    console.log('The application is running at port ' + port);
});

/*
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
*/