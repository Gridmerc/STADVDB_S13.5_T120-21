const db = require('../database');

const threeTableController = {
    getFourTables : function(req, res) {
        var sql = "SELECT C.clientID, C.client_name, CI.tot_revolving_bal, C.age FROM	CLIENTS C JOIN	CREDIT_INFOS CI ON	C.clientID = CI.clientID JOIN CARDS CA ";
        var sql2 = "ON	C.card_category_id = CA.card_id JOIN EDUCATION_LEVELS E ON C.education_level_id = E.education_id WHERE	E.education_type = 'Graduate'";
        var sql3 = "AND	CA.card_type = 'Gold' AND C.marital_status = 'Single';";
        sql = sql + " " + sql2 + " "+ sql3;
        db.query(sql,function(err, data, fields){
            if(err) throw err;
            res.render('fourTables.ejs', {title: 'FourTables', userData: data});
        });
        
    },
    postFourTable: function(req, res) {
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

module.exports = fourTableController;