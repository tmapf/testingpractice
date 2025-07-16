import basePage from '../src/base.page';
const { test, expect } = require('@playwright/test');



test('Click on all cards', async ({page}) => {
    await page.goto('/');
    const base = await new basePage(page);
    for(let i = 0; i < 5; i++){
        await base.openCardByIndex(i);
        await page.pause();
        await page.goto('/');
    }
})
