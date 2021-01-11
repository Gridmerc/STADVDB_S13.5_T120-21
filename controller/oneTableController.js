const db = require('../database');

const oneTableController = {
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