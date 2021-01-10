const db = require('../database');

/* home page */
exports.HomePage = function(req, res) {
    res.render('home.hbs', {title: 'Home'});  
};
/* one table (1) page */
exports.oneTableOne = function(req, res, next) {
    var sql = 'SELECT client_name, age, marital_status FROM CLIENTS WHERE age <' + '30';
    db.query(sql,function(err, data, fields){
        if(err) throw err;
        res.render('oneTableOne', {title: 'One Table', userData: data});
    });
};

/* one table (2) page */
exports.oneTableTwo = function(req, res) {
    res.render('oneTableTwo.ejs', {title: 'One Table'});
};

/* two tables (1) page */
exports.twoTablesOne = function(req, res) {
    res.render('twoTablesOne.ejs', {title: 'Two Tables'});
};

/* two tables (2) page */
exports.twoTablesTwo = function(req, res) {
    res.render('twoTablesTwo.ejs', {title: 'Two Tables'});
};

/* three tables (1) page */
exports.threeTablesOne = function(req, res) {
    res.render('threeTablesOne.ejs', {title: 'Three Tables'});
};

/* three tables (2) page */
exports.threeTablesTwo = function(req, res) {
    res.render('threeTablesTwo.ejs', {title: 'Three Tables'});
};

/* four tables page */
exports.fourTables= function(req, res) {
    res.render('fourTables.ejs', {title: 'Four Tables'});
};

exports.QueryDisplay = function(req, res){
    const query = req.body.query;

    db.query(query,(err,results,fields) =>{
        if (err) throw err;
        
        const map = fields.map(fieldPacket =>{
            return fieldPacket.name;
        }); 

        res.status(400).send({ results, map });

    });
};