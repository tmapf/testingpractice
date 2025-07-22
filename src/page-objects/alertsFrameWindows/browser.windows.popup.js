export default class browserWindowsPopup {
    constructor(page) {
        this.page = page;
        this.text = page.locator('//h1[@id="sampleHeading"]');
    }
    async getText() {
        return this.text.textContent();
    }
}