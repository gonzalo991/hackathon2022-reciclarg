const {Router} = require('express');
const router = Router();
const controller = require('../controllers/index.controller');

router.use('/', controller.index);


module.exports = router;