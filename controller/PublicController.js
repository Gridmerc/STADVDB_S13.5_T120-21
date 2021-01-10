const db = require('../database');

/* home page */
exports.HomePage = function(req, res) {
    res.render('home');  
};
/* one table page */
exports.oneTable = function(req, res) {
    res.render('oneTable');
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