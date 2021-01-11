var express = require('express');
const router = express.Router();
module.exports = router;
const PublicController = require('../controller/PublicController');

const oneTableController = require('../controller/oneTableController');
const twoTableController = require('../controller/twoTableController');

router.get('/', PublicController.HomePage);
router.get('/threeTablesOne', PublicController.threeTablesOne);
router.get('/threeTablesTwo', PublicController.threeTablesTwo);
router.get('/fourTables', PublicController.fourTables);

router.get('/oneTableOne', oneTableController.getOneTableOne);
router.get('/oneTableTwo', oneTableController.getOneTableTwo);
router.get('/twoTablesOne', twoTableController.getTwoTableOne);
router.get('/twoTablesTwo', twoTableController.getTwoTableTwo);

router.post('/oneTableOne', oneTableController.postOneTableOne);
router.post('/oneTableTwo', oneTableController.postOneTableTwo);
router.post('/twoTablesOne', twoTableController.postTwoTableOne);
router.post('/twoTablesTwo', twoTableController.postTwoTableTwo);