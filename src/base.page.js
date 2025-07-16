import test from '@playwright/test';
import CategoryCardsEnum from "../enums/categoryCards";

export default class BasePage {
    constructor(page) {
        this.page = page;
    }
    async openCardByIndex(index) {
        await test.step(`open card '${index}'`, async () => {
            await this.page.locator(`//div[@class="category-cards" and count(./div)=6]/div`).nth(index).click();
        })
    }

}