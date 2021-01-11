var express = require('express');
const router = express.Router();
module.exports = router;
const PublicController = require('../controller/PublicController');

const oneTableController = require('../controller/oneTableController');

router.get('/', PublicController.HomePage);
router.get('/twoTablesOne', PublicController.twoTablesOne);
router.get('/twoTablesTwo', PublicController.twoTablesTwo);
router.get('/threeTablesOne', PublicController.threeTablesOne);
router.get('/threeTablesTwo', PublicController.threeTablesTwo);
router.get('/fourTables', PublicController.fourTables);

router.get('/oneTableOne', oneTableController.getOneTableOne);
router.get('/oneTableTwo', oneTableController.getOneTableTwo);

router.post('/oneTableOne', oneTableController.postOneTableOne);
router.post('/oneTableTwo', oneTableController.postOneTableTwo);