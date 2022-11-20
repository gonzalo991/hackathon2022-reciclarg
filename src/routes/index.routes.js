const router = require('express').Router();
const controller = require('../controllers/index.controller');

router.get('/', controller.index);
router.get('/recompensas', controller.recompensas);
router.get('/error404notfound', controller.error);
router.get('/tutoriales', controller.tutoriales);
//router.post('/send-mail', controller.sendMail);

module.exports = router;