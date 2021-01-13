// Modules
const db = require('../database');

const homeController = {
    getHome: function(req, res) {
        res.render('home.hbs', {title: 'Query List'});
    }
}

module.exports = homeController;