import basePage from '../src/page-objects/base.page';
import listPage from '../src/page-objects/list.page';
import textBox from '../src/page-objects/elements/elements.text.box'
import ElementsListNumbers from '../enums/elements.list.numbers'
import ListPageNumbers from '../enums/list.page.accordion.numbers'
import checkBox from "../src/page-objects/elements/elements.check.box";
import elementsListHelper from "../src/page-objects/helper.elements.list";
import AWFListNumbers from "../enums/alertsFW.list.numbers";
import browserWindows from "../src/page-objects/alertsFrameWindows/browser.windows";
import browserWindowsPopup from "../src/page-objects/alertsFrameWindows/browser.windows.popup";

import {test, expect} from '@playwright/test';




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
        await list.openDropdownByIndex(ListPageNumbers.Elements.num);
    })

    test('Text Box fill and submit',  async ({page}) => {

        const textBoxPage = await test.step('Fill the text box', async () => {
            const elementListPage = await new elementsListHelper(page);
            await elementListPage.openSubtabByNameAndIndex(ListPageNumbers.Elements.name, ElementsListNumbers.TextBox);
            const textBoxPage = await new textBox(page);
            await textBoxPage.fillFullName('Example');
            await textBoxPage.fillEmail('example@something.com');
            await textBoxPage.fillCurrentAddress('Prosta 11');
            await textBoxPage.fillPermanentAddress('Prosta 12');
            return textBoxPage;
        })

        await test.step('Submit', async () => {
            await textBoxPage.pressSubmit();
        })

    })

    test('Check Box check one and then uncheck', async ({page}) => {
        const checkbox = await test.step('Expand all checkboxes', async () => {
            const elementListPage = await new elementsListHelper(page);
            await elementListPage.openSubtabByNameAndIndex(ListPageNumbers.Elements.name, ElementsListNumbers.CheckBox);
            const checkbox = await new checkBox(page);
            await checkbox.expandAll();
            return checkbox;
        });

        await test.step('Check 1 checkbox',  async () => {
            let example = [1,3,2];
            const exampleCheckbox = await checkbox.selectCheckBoxByIndex(example);
            exampleCheckbox.click();
            await expect(exampleCheckbox).toBeChecked();
        });

        await test.step('Check all checkboxes', async () => {
            const cbox = await checkbox.selectCheckBoxByIndex([1]);
            cbox.click();
        });

        await test.step('Uncheck all checkboxes', async () => {
            const cbox = await checkbox.selectCheckBoxByIndex([1]);
            cbox.click();
        });

        await test.step('Collapse checkbox list', async () => {
            await checkbox.collapseAll();
        });

    })
})

test.describe('Alerts, Frame & Windows subtests', async () => {


    test.beforeEach(async ({browser}) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('/elements');
        const list = await new listPage(page);
        await list.openDropdownByIndex(ListPageNumbers.AlertsFrameWindows.num);
    });

    test('Interaction with multiple tabs', async ({browser}) => {

        const browserWindowsPage = await test.step('Open the \'browser windows tab\'', async () => {
            const context = await browser.contexts()[0];
            const page = context.pages()[0];
            const list = await new listPage(page);
            await list.openDropdownByIndex(ListPageNumbers.AlertsFrameWindows.num);

            const alertsFrameWindowsListPage = await new elementsListHelper(page);
            await alertsFrameWindowsListPage.openSubtabByNameAndIndex(ListPageNumbers.AlertsFrameWindows.name, AWFListNumbers.BrowserWindows);
            return new browserWindows(page);
        })

        await test.step('Open new tab by clicking the button', async () => {
            const context = await browser.contexts()[0];
            const newPage = await browserWindowsPage.openTab(context);
            const browserWindowsPopupPage = await new browserWindowsPopup(newPage);
            await expect(browserWindowsPopupPage.text).toHaveText('This is a sample page');
            console.log(await browserWindowsPopupPage.getText());
        });
    })
})


// test.describe(' subtests', async ({page}) => {})