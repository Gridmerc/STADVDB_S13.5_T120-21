var express = require('express');
const router = express.Router();
module.exports = router;
const PublicController = require('../controller/PublicController');

router.get('/', PublicController.HomePage);
router.get('/oneTableOne', PublicController.oneTableOne);
router.get('/oneTableTwo', PublicController.oneTableTwo);
router.get('/twoTablesOne', PublicController.twoTablesOne);
router.get('/twoTablesTwo', PublicController.twoTablesTwo);
router.get('/threeTablesOne', PublicController.threeTablesOne);
router.get('/threeTablesTwo', PublicController.threeTablesTwo);
router.get('/fourTables', PublicController.fourTables);
