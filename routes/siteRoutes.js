const express = require('express');
const router = express.Router();
const controller = require('../controllers/siteControllers');

router.get('/contact', controller.contactus);

router.get('/', controller.hello);
router.post('/', controller.helpost);
router.get('/no', controller.no);
router.get('/listall', controller.listall);

module.exports = router;