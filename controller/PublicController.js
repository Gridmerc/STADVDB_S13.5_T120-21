const db = require('../database');

const db = require('../database');

exports.HomePage = function(req, res) {
    res.render('home',{
        title:"HOMEPAGE"
    })  
};

exports.QueryDisplay = function(req, res){
    const investigate = req.body.query;

    db.query(investigate,(err,results,fields) =>{
        if (err) throw err;
        
        const map = fields.map(fieldPacket =>{
            return fieldPacket.name;
        }); 

        //res.status(400).send('not found);

    });
};