var express = require('express');
const router = express.Router();
module.exports = router;
const PublicController = require('../controller/PublicController');

router.get('/', PublicController.HomePage);
router.get('/oneTable', PublicController.oneTable);
router.post('/querydisplay', PublicController.QueryDisplay);