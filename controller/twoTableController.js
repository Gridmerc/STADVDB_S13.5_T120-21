const db = require('../database');

const twoTableController = {
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

    getTwoTableTwo: function(req, res) {
        let sql = 'SELECT COUNT(C.clientID) AS "Count", E.education_type AS "Eductype" ' +
                  'FROM CLIENTS C JOIN EDUCATION_LEVELS E ON C.education_level_id = E.education_id ' +
                  'WHERE age < 30 ' +
                  'GROUP BY E.education_type;';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('twoTablesTwo.ejs', {title: 'One Table - Second Query', userData: data});
        });
    },

    postTwoTableOne: function(req, res) {
        let card = req.body.card;
        let sql = 'SELECT C.clientID, C.client_name ' +
                  'FROM CLIENTS C JOIN CARDS CA ' +
                  'ON C.card_category_id = CA.card_id ' +
                  'WHERE CA.card_type = ' + '"' + card + '"' + ';';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('twoTablesOne.ejs', {title: 'Two Table - First Query', userData: data});
        });
    },

    postTwoTableTwo: function(req, res) {
        let age = req.body.age;
        let comparison = req.body.comparison;
        let sql = "SELECT COUNT(C.clientID) AS 'Count', E.education_type AS 'Eductype' " +
                  'FROM CLIENTS C JOIN EDUCATION_LEVELS E ON C.education_level_id = E.education_id ' +
                  'WHERE age ' + comparison + ' ' +  age + ' ' +
                  'GROUP BY E.education_type;';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('twoTablesTwo.ejs', {title: 'Two Table - Second Query', userData: data});
        });
    }
}

module.exports = twoTableController;