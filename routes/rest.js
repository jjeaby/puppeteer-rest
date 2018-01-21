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

router.post('/test', (req, res, next) => {
    const data = req.body;
    console.log(puppeteerapi.bypass(data));
    res.send('respond with a resource');
});


router.post('/openPage', async (req, res, next) => {
    const data = req.body;
    const { headless, } = data;
    const retValue = await puppeteerapi.openPage(headless);
    res.send(retValue);
});


router.post('/goto', async (req, res, next) => {
    const data = req.body;
    const {
        tabindex,
        url,
    } = data;
    const retValue = await puppeteerapi.goto(tabindex, url);
    res.send(retValue);
});

module.exports = router;
