// Modules
const db = require('../database');

const homeController = {
    getHome: function(req, res) {
        res.render('home.ejs', {title: 'Query List'});
    }
}

module.exports = homeController;