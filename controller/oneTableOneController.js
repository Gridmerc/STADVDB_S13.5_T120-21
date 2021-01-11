const db = require('../database');

const oneTableOneController = {
    getOneTableOne: function(req, res) {
        let sql = 'SELECT client_name, age, marital_status ' +
                  'FROM CLIENTS ' +
                  'WHERE AGE = 0';
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('oneTableOne.ejs', {title: 'One Table - First Query', userData: data});
        });
    },

    postOneTable: function(req, res) {
        let age = req.body.age;
        let comparison = req.body.comparison;
        let sql = 'SELECT client_name, age, marital_status ' +
                  'FROM CLIENTS ' +
                  'WHERE AGE ' + comparison + ' ' + age;
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('oneTableOne.ejs', {title: 'One Table - First Query', userData: data});
        });
    }
}

module.exports = oneTableOneController;