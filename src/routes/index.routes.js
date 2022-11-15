const router = require('express').Router();
const controller = require('../controllers/index.controller');

router.use('/', controller.index);
router.use('/send-mail', controller.sendMail);

module.exports = router;