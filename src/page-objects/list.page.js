import test from '@playwright/test'
import BasePage from "./base.page";


export default class listPage {
    constructor(page) {
        this.page = page;
        this.elements = page.locator('//div[./div/ul and .//div[text()="Elements"]]');
        this.forms = page.locator('//div[./div/ul and .//div[text()="Forms"]]');
        this.alertsFrameWindows = page.locator('//div[./div/ul and .//div[text()="Alerts, Frame & Windows"]]');
        this.widgets = page.locator('//div[./div/ul and .//div[text()="Widgets"]]');
        this.interactions = page.locator('//div[./div/ul and .//div[text()="Interactions"]]');
        this.bookStoreApplication = page.locator('//div[./div/ul and .//div[text()="Book Store Application"]]');
        this.accordion = [this.elements, this.forms, this.alertsFrameWindows, this.widgets, this.interactions, this.bookStoreApplication];
    }


    async openDropdownByIndex(index) {
        await test.step(`Open dropdown menu ${index}`, async () => {
            if (!(await this.accordion[index].locator('xpath=./div[ul]').isVisible()))
                await this.accordion[index].locator('xpath=./span').click();
        })
    }

    async closeDropdownByIndex(index) {
        await test.step(`Close dropdown menu ${index}`, async () => {
            if (await this.accordion[index].locator('xpath=./div[ul]').isVisible())
                await this.accordion[index].locator('xpath=./span').click();
        })
    }
}