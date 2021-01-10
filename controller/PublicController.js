const db = require('../database');

/* home page */
exports.HomePage = function(req, res) {
    res.render('home');  
};
/* one table (1) page */
exports.oneTableOne = function(req, res) {
    res.render('oneTableOne');
};

/* one table (2) page */
exports.oneTableTwo = function(req, res) {
    res.render('oneTableTwo');
};

/* two tables (1) page */
exports.twoTablesOne = function(req, res) {
    res.render('twoTablesOne');
};

/* two tables (2) page */
exports.twoTablesTwo = function(req, res) {
    res.render('twoTablesTwo');
};

/* three tables (1) page */
exports.threeTablesOne = function(req, res) {
    res.render('threeTablesOne');
};

/* three tables (2) page */
exports.threeTablesTwo = function(req, res) {
    res.render('threeTablesTwo');
};

/* four tables page */
exports.fourTables= function(req, res) {
    res.render('fourTables');
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