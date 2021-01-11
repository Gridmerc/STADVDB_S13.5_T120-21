var express = require('express');
const router = express.Router();
module.exports = router;
const PublicController = require('../controller/PublicController');

const oneTableOneController = require('../controller/oneTableOneController');

router.get('/', PublicController.HomePage);
router.get('/oneTableTwo', PublicController.oneTableTwo);
router.get('/twoTablesOne', PublicController.twoTablesOne);
router.get('/twoTablesTwo', PublicController.twoTablesTwo);
router.get('/threeTablesOne', PublicController.threeTablesOne);
router.get('/threeTablesTwo', PublicController.threeTablesTwo);
router.get('/fourTables', PublicController.fourTables);

router.get('/oneTableOne', oneTableOneController.getOneTableOne);
router.post('/oneTableOne', oneTableOneController.postOneTable);