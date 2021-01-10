const db = require('../database');

/* home page */
exports.HomePage = function(req, res) {
    res.render('home.hbs', {title: 'The Query List'});  
};
/* one table (1) page */
exports.oneTableOne = function(req, res, next) {
    var age = req.body.age;
    if(age !== null){
        var sql = 'SELECT client_name, age, marital_status FROM CLIENTS WHERE age ='+ age ;
    db.query(sql,function(err,data,fields){
        if(err) throw err;
        res.render('oneTableOne', {title: 'One Table', userData: data});
    });
    }

    else{
        var sql = 'SELECT client_name, age, marital_status FROM CLIENTS WHERE age = 0' ;
    db.query(sql,function(err,data,fields){
        if(err) throw err;
        res.render('oneTableOne', {title: 'One Table', userData: data});
    });
    }

    
};

/* one table (2) page */
exports.oneTableTwo = function(req, res) {
    var sql = 'SELECT clientID, client_name FROM CLIENTS WHERE dependent_count = 1;';
    db.query(sql,function(err, data, fields){
        if(err) throw err;
        res.render('oneTableTwo.ejs', {title: 'One Table', userData: data});
    });
    
};

/* two tables (1) page */
exports.twoTablesOne = function(req, res) {
    var sql = 'SELECT clientID, client_name FROM CLIENTS C JOIN CARDS CA ON C.card_category_id = CA.card_id WHERE CA.card_type = "Platinum";';
    db.query(sql,function(err, data, fields){
        if(err) throw err;
        res.render('twoTablesOne.ejs', {title: 'Two Tables', userData: data});
    });
};

/* two tables (2) page */
exports.twoTablesTwo = function(req, res) {
    var sql = "SELECT COUNT(C.clientID), E.education_type FROM CLIENTS C JOIN EDUCATION_LEVELS E ON	C.education_level_id = E.education_id WHERE	C.age < 30 GROUP BY	E.education_type;";
    db.query(sql,function(err, data, fields){
        if(err) throw err;
        res.render('twoTablesTwo.ejs', {title: 'Two Tables', userData: data});
    });
};

/* three tables (1) page */
exports.threeTablesOne = function(req, res) {
    var sql ="SELECT		AVG(age) AS 'AVERAGE AGE' "
    +"FROM		CLIENTS C JOIN INCOMES I "
    +"ON			C.income_category_id = I.income_id "
    +"JOIN		CARDS CA "
    +"ON			C.card_category_id = CA.card_id "
    +"WHERE		I.income_type = '$60K - $80K' "
    +"AND			CA.card_type = 'Gold';";
    db.query(sql,function(err, data, fields){
        if(err) throw err;
        res.render('threeTablesOne.ejs', {title: 'Three Tables', userData: data});
    });
};

/* three tables (2) page */
exports.threeTablesTwo = function(req, res) {
    var sql = "SELECT		SUM(CI.tot_trans_count) AS 'Sum of Transaction Count' "
    +"FROM		CLIENTS C "
    +"JOIN		EDUCATION_LEVELS E "
    +"ON			C.education_level_id = E.education_id "
    +"JOIN		CREDIT_INFOS CI "
    +"ON			C.clientID = CI.clientID "
    +"WHERE		E.education_type = 'College';";
    db.query(sql,function(err, data, fields){
        if(err) throw err;
        res.render('threeTablesTwo.ejs', {title: 'Three Tables', userData: data});
    });
};

/* four tables page */
exports.fourTables= function(req, res) {
    var sql = "SELECT C.clientID, C.client_name, CI.tot_revolving_bal, C.age FROM	CLIENTS C JOIN	CREDIT_INFOS CI ON	C.clientID = CI.clientID JOIN CARDS CA ";
    var sql2 = "ON	C.card_category_id = CA.card_id JOIN EDUCATION_LEVELS E ON C.education_level_id = E.education_id WHERE	E.education_type = 'Graduate'";
    var sql3 = "AND	CA.card_type = 'Gold' AND C.marital_status = 'Single';";
    sql = sql + " " + sql2 + " "+ sql3;
    db.query(sql,function(err, data, fields){
        if(err) throw err;
        res.render('fourTables.ejs', {title: 'FourTables', userData: data});
    });
    
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