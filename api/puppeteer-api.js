

const puppeteer = require('puppeteer');


const bypass = (name => name);


const openPage = (async (headless) => {
    console.log('1');

    const browser = await puppeteer.launch({ headless, });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png', });
    // await page.pdf({path: 'hn.pdf', format: 'A4'});
    //
    // await browser.close();
});
// now we export the class, so other modules can create Cat objects
module.exports = {
    bypass,
    openPage,
};
