import basePage from '../src/page-objects/base.page';
import listPage from '../src/page-objects/list.page';
import textBox from '../src/page-objects/elements/elements.text.box'
import elementsListPage from "../src/page-objects/elements/elements.list";
import ElementsListNumbers from '../enums/elements.list.numbers'
import ListPageNumbers from '../enums/list.page.accordion.numbers'
import checkBox from "../src/page-objects/elements/elements.check.box";

const { test, expect } = require('@playwright/test');



test('Click on all cards', async ({page}) => {
    await page.goto('/');
    const base = await new basePage(page);
    for(let i = 0; i < 5; i++){
        await base.openCardByIndex(i);
        await page.goto('/');
    }
})

test('Open & close every dropdown',  async ({page}) => {
    await page.goto('/elements');
    const list = await new listPage(page);
    for(let i = 0; i < 6; i++){
        await list.openDropdownByIndex(i);
        await list.closeDropdownByIndex(i);
    }
})

test.describe('Elements subtests', async () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/elements');
        const list = await new listPage(page);
        await list.openDropdownByIndex(ListPageNumbers.Elements);
    })

    test('Text Box fill and submit',  async ({page}) => {
        const elementListPage = await new elementsListPage(page);
        await elementListPage.openSubtabByIndex(ElementsListNumbers.TextBox);
        const textBoxPage = await new textBox(page);
        await textBoxPage.fillFullName('Example');
        await textBoxPage.fillEmail('example@something.com');
        await textBoxPage.fillCurrentAddress('Prosta 11');
        await textBoxPage.fillPermanentAddress('Prosta 12');
        await textBoxPage.pressSubmit();
    })

    test.only('Check Box check one and then uncheck', async ({page}) => {
        const elementListPage = await new elementsListPage(page);
        await elementListPage.openSubtabByIndex(ElementsListNumbers.CheckBox);
        const checkbox = await new checkBox(page);
        await checkbox.expandAll();
        let example = [1,3,2];
        await checkbox.checkByIndex(example);
        await checkbox.checkByIndex([1]);
        await checkbox.checkByIndex([1]);
        await checkbox.collapseAll();
        await page.pause();
    })

})

