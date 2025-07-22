import {expect} from "@playwright/test";

export default class checkBox {
    constructor(page) {
        this.page = page;
        this.mainLayer = page.locator('//div[./div/following-sibling::ol]/ol');
        this.expand = page.locator('//button[@title="Expand all"]');
        this.collapse = page.locator('//button[@title="Collapse all"]')
    }

    async expandAll(){
        await this.expand.click();
    }

    async collapseAll(){
        await this.collapse.click();
    }

    async selectCheckBoxByIndex(array) {
        let loc = 'xpath=./';
        for(let i = 0; i < array.length-1; i++) {
            loc = loc + `li[${array[i]}]/ol/`;
        }
        loc = loc + `li[${array[array.length-1]}]/span/label`;
        await expect(this.mainLayer.locator(loc)).toBeVisible();
        return this.mainLayer.locator(loc);
    }

}