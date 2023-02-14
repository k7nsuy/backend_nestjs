import puppeteer from "puppeteer";
import mongoose from "mongoose";
import {Stock} from './models/stock.model.js'

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27018/stock")

async function startCrawling() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.setViewport({width: 1280, height: 720})
    await page.goto('https://finance.naver.com/item/sise.naver?code=005930')
    await page.waitForTimeout(1000)

    const framPage = await page.frames().find((el) => (el.url().includes('/item/sise_day.naver?code=005930')))
    
    for(let i = 3; i <= 7; i++) {
        const date = await framPage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`, 
        (el) => (el.textContent))

        const price = await framPage.$eval(`body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`, 
        (el) => (el.textContent))

        const stock = new Stock({
            name: '삼성전자',
            date: date,
            price: Number(price.replace(',', ''))
        })

        await stock.save()
    }
    await browser.close()
}
startCrawling()