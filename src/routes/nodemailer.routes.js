const {Router} = require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send', (req, res) => {

    console.log(req.body);
    res.send('recieved');

});

module.exports = router;