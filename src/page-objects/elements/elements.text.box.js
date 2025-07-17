export default class textBox {
    constructor(page) {
        this.page = page;
        this.fullName = page.locator('//div[./div/label[text()="Full Name"]]/div/input');
        this.email = page.locator('//div[./div/label[text()="Email"]]/div/input');
        this.currentAddress = page.locator('//div[./div/label[text()="Current Address"]]/div/textarea');
        this.permanentAddress = page.locator('//div[./div/label[text()="Permanent Address"]]/div/textarea');
        this.submitButton = page.locator('//button[@id="submit"]');
        this.output = page.locator('//div[@id="output"]');
    }

    async fillFullName(name) {
        await this.fullName.click();
        await this.fullName.fill(name);
    }
    async fillEmail(email) {
        await this.email.click();
        await this.email.fill(email);
    }
    async fillCurrentAddress(currentAddress) {
        await this.currentAddress.click();
        await this.currentAddress.fill(currentAddress);
    }

    async fillPermanentAddress(permanentAddress) {
        await this.permanentAddress.click();
        await this.permanentAddress.fill(permanentAddress);
    }
    async pressSubmit() {
        await this.submitButton.click();
    }

}