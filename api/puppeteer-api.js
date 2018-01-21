const puppeteer = require('puppeteer');

let browser;
const bypass = (name => name);

const openPage = (async (headless) => {
    try {
        browser = await puppeteer.launch({ headless, });
        return 'success';
    } catch (e) {
        return e.message;
    }
});

const goto = (async (tab, url) => {
    try {
        const page = await browser.pages();
        const retValue = await page[tab].goto(url);
        return retValue;
    } catch (e) {
        return e.message;
    }
});


// now we export the class, so other modules can create Cat objects
module.exports = {
    bypass,
    openPage,
    goto,
};
