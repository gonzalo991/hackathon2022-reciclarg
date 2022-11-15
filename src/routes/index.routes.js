const router = require('express').Router();
const controller = require('../controllers/index.controller');

router.get('/', controller.index);
router.post('/send-mail', controller.sendMail);

module.exports = router;