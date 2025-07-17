export default class elementsListPage{
    constructor(page) {
        this.page = page;
        this.textBox = page.locator('//li[./span[text()="Text Box"]]');
        this.checkBox = page.locator('//li[./span[text()="Check Box"]]');
        this.radioButton= page.locator('//li[./span[text()="Radio Button"]]');
        this.webTables = page.locator('//li[./span[text()="Web Tables"]]');
        this.buttons = page.locator('//li[./span[text()="Buttons"]]');
        this.links = page.locator('//li[./span[text()="Links"]]');
        this.brokenLinksImages = page.locator('//li[./span[text()="Broken Links - Images"]]');
        this.uploadAndDownload= page.locator('//li[./span[text()="Upload and Download"]]');
        this.dynamicProperties = page.locator('//li[./span[text()="Dynamic Properties"]]');
        this.list = [this.textBox, this.checkBox, this.radioButton, this.webTables, this.buttons, this.links, this.brokenLinksImages, this.uploadAndDownload, this.dynamicProperties];
    }

    async openSubtabByIndex(index) {
        await this.list[index].click();
    }



}