const router = require('express').Router();
const { application } = require('express');
const controller = require('../controllers/index.controller');


router.get('/', controller.index);
router.get('/recompensas', controller.recompensas);
router.get('/error404notfound', controller.error);
router.get('/tutoriales', controller.tutoriales);
router.get('exito', controller.exito);
router.post('/', controller.sendEmail);

module.exports = router;