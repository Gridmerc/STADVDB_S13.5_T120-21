const db = require('../database');

const oneTableController = {
    getTwoTableOne: function(req, res) {
        let sql = 'SELECT clientID, client_name ' +
                  'FROM CLIENTS C JOIN CARDS CA ' +
                  'ON C.card_category_id = CA.card_id ' +
                  'WHERE CA.card_type = "Platinum";';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('twoTablesOne.ejs', {title: 'Two Table - First Query', userData: data});
        });
    },
    getThreeTablesOne : function(req, res) {
        var sql ="SELECT		AVG(age) AS 'AvgAge' "
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
    },
    getOneTableOne: function(req, res) {
        let sql = 'SELECT client_name, age, marital_status ' +
                  'FROM CLIENTS ' +
                  'WHERE AGE = 0';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('oneTableOne.ejs', {title: 'One Table - First Query', userData: data});
        });
    },

    getOneTableTwo: function(req, res) {
        let sql = 'SELECT clientID, client_name ' +
                  'FROM CLIENTS ' +
                  'WHERE dependent_count = 0;';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('oneTableTwo.ejs', {title: 'One Table - Second Query', userData: data});
        });
    },

    postOneTableOne: function(req, res) {
        let age = req.body.age;
        let comparison = req.body.comparison;
        let sql = 'SELECT client_name, age, marital_status ' +
                  'FROM CLIENTS ' +
                  'WHERE AGE ' + comparison + ' ' + age + ';';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('oneTableOne.ejs', {title: 'One Table - First Query', userData: data});
        });
    },

    postOneTableTwo: function(req, res) {
        let count = req.body.dependents;
        let comparison = req.body.comparison;
        let sql = 'SELECT clientID, client_name ' +
                  'FROM CLIENTS ' +
                  'WHERE dependent_count ' + comparison + ' ' + count + ';';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('oneTableTwo.ejs', {title: 'One Table - Second Query', userData: data});
        });
    }
}

module.exports = oneTableController;