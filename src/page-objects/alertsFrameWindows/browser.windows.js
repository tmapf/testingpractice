
export default class browserWindows {
    constructor(page) {
        this.page = page;
        this.newTabButton = page.locator('//button[@id="tabButton"]');
        this.newWindowButton = page.locator('//button[@id="windowButton"]');
        this.newWindowMessage = page.locator('//button[@id="messageWindowButton"]');
    }

    async openTab(context) {
        const pagePromise = context.waitForEvent('page');
        await this.newTabButton.click();
        const newTab = await pagePromise;
        return newTab;
    }

    async openWindow() {
        const pagePromise = context.waitForEvent('page');
        await this.newWindowButton.click();
        return await pagePromise;
    }
    async openMessage() {
        const pagePromise = context.waitForEvent('page');
        await this.newWindowMessage.click();
        return await pagePromise;
    }

}