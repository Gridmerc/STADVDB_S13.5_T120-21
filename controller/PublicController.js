const db = require('../database');

/* home page */
exports.HomePage = function(req, res) {
    res.render('home.hbs', {title: 'Home'});  
};
/* one table (1) page */
exports.oneTableOne = function(req, res) {
    res.render('oneTableOne.hbs', {title: 'One Table'});
};

/* one table (2) page */
exports.oneTableTwo = function(req, res) {
    res.render('oneTableTwo.hbs', {title: 'One Table'});
};

/* two tables (1) page */
exports.twoTablesOne = function(req, res) {
    res.render('twoTablesOne.hbs', {title: 'Two Tables'});
};

/* two tables (2) page */
exports.twoTablesTwo = function(req, res) {
    res.render('twoTablesTwo.hbs', {title: 'Two Tables'});
};

/* three tables (1) page */
exports.threeTablesOne = function(req, res) {
    res.render('threeTablesOne.hbs', {title: 'Three Tables'});
};

/* three tables (2) page */
exports.threeTablesTwo = function(req, res) {
    res.render('threeTablesTwo.hbs', {title: 'Three Tables'});
};

/* four tables page */
exports.fourTables= function(req, res) {
    res.render('fourTables.hbs', {title: 'Four Tables'});
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