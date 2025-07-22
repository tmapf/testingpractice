export default class elementsListHelper{
    constructor(page) {
        this.page = page;
    }
    async openSubtabByNameAndIndex(name, index) {
        await this.page.locator(`//div[./span//div[text()="${name}"]]//li`).nth(index).click();
    }
}