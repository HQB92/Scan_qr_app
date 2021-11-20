const express = require('express');
const puppeteer = require("puppeteer");
const imageToBase64 = require('image-to-base64');
const qr = require('./Sin título.png');
const app =express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send('server funcionando');
});

app.listen (port,()=>{
    console.log('Mi port ' + port);
});

app.get("/scrapping",(req, res) =>{
    
    
    let scrape = async () => {
		const browser = await puppeteer.launch({ headless: false, args: [ '--use-fake-ui-for-media-stream' ] });
		const page = await browser.newPage();
		
		await page.goto('https://scanmevacuno.gob.cl');
        await page.click('.no-margin-vertical  a');
        await page.waitFor(1500);
        await page.click('.dialog-button-bold');
        await page.setViewport({ width: 1920, height: 1080 });
	}
    
	scrape()
});