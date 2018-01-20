const express = require('express');
const puppeteerapi = require('../api/puppeteer-api');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    const rest = {
        message: 'rest',
        message_code: '200',
    };
    res.send(rest);
});

router.get('/test', (req, res, next) => {
    console.log(puppeteerapi.bypass('ddd'));
    res.send('respond with a resource');
});


router.get('/openPage', (req, res, next) => {
    puppeteerapi.openPage(false);
    res.send('respond with a resource');
});


module.exports = router;
