const db = require('../database');

const threeTableController = {
    getThreeTablesOne : function(req, res) {
        console.log("I am here");
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

    getThreeTablesTwo : function(req, res) {
    var sql = "SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'"
    +"FROM		CLIENTS C "
    +"JOIN		EDUCATION_LEVELS E "
    +"ON			C.education_level_id = E.education_id "
    +"JOIN		CREDIT_INFOS CI "
    +"ON			C.clientID = CI.clientID "
    +"WHERE		E.education_type = 'College';";
    db.query(sql,function(err, data, fields){
        if(err) throw err;
        res.render('threeTablesTwo.ejs', {title: 'Three Tables', userData: data});
    })
},
    postThreeTableOne: function(req, res) {
        let card = req.body.card;
        let income_type = req.body.income_type;
        var sql ="SELECT		AVG(age) AS 'AvgAge' "
        +"FROM		CLIENTS C JOIN INCOMES I "
        +"ON			C.income_category_id = I.income_id "
        +"JOIN		CARDS CA "
        +"ON			C.card_category_id = CA.card_id "
        +"WHERE		I.income_type = " + income_type
        +"AND			CA.card_type = " + card + ";";
        db.query(sql, function(err, data) {
            if(err) throw err;
            res.render('threeTablesOne.ejs', {title: 'Two Table - First Query', userData: data});
        });
    },

    postThreeTableTwo: function(req, res) {
        let education_type = req.body.education_type;
        var sql = "SELECT		SUM(CI.tot_trans_count) AS 'SumofTransactionCount' , E.education_type AS 'eductype'"
        +"FROM		CLIENTS C "
        +"JOIN		EDUCATION_LEVELS E "
        +"ON			C.education_level_id = E.education_id "
        +"JOIN		CREDIT_INFOS CI "
        +"ON			C.clientID = CI.clientID "
        +"WHERE		E.education_type = "+ education_type + ";";
        db.query(sql,function(err, data, fields){
            if(err) throw err;
            res.render('threeTablesTwo.ejs', {title: 'Three Tables', userData: data});
        });    
    }
}

module.exports = threeTableController;