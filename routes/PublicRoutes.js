var express = require('express');
const router = express.Router();
module.exports = router;
const PublicController = require('../controller/PublicController');

const oneTableController = require('../controller/oneTableController');
const twoTableController = require('../controller/twoTableController');
const threeTablecontroller =  require('../controller/threeTableController');
const fourTableController = require('../controller/fourTableController');
router.get('/', PublicController.HomePage);



router.get('/threeTablesOne', threeTablecontroller.getThreeTablesOne);
router.get('/threeTablesTwo', threeTablecontroller.getThreeTablesTwo);
router.get('/oneTableOne', oneTableController.getOneTableOne);
router.get('/oneTableTwo', oneTableController.getOneTableTwo);
router.get('/twoTablesOne', twoTableController.getTwoTableOne);
router.get('/twoTablesTwo', twoTableController.getTwoTableTwo);
router.get('/fourTables', fourTableController.getFourTables);

router.post('/oneTableOne', oneTableController.postOneTableOne);
router.post('/oneTableTwo', oneTableController.postOneTableTwo);
router.post('/twoTablesOne', twoTableController.postTwoTableOne);
router.post('/twoTablesTwo', twoTableController.postTwoTableTwo);
router.post('/threeTablesOne', threeTablecontroller.postThreeTableOne);
router.post('/threeTablesTwo', threeTablecontroller.postThreeTableTwo);
router.post('/fourTables', fourTableController.postFourTable)