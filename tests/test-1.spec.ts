import { test, expect } from '@playwright/test';
import path from 'path';

test('locator demo', async ({ page }) => {
   // await page.goto('http://127.0.0.1:5500/tests/locators.html');
   //await page.goto("http://127.0.0.1:5500/tests/shadowdom.html");
   // await page.goto("http://127.0.0.1:5500/tests/dialog.html");
    await page.goto("http://127.0.0.1:5500/tests/actions.html");

    // //Creating a locator
    // const clickMeButton= page.getByRole('button', {name: 'Click Me'});
    // await clickMeButton.click();

    // const navElement= page.getByRole('navigation', {name: 'Main Navigation'});
    // await navElement.isVisible;

    // await page.getByPlaceholder('Search here...').fill('Playwright');

    // await expect(page.getByText('Welcome, John')).toBeVisible();
    // await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible();
    // await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();
    //await page.getByAltText('Playwright Logo').click();
  //  await expect(page.getByTitle('More Info')).toHaveText('Hover over me');
  //  await page.getByTestId('submit-btn').click();
   // await expect(page.getByTestId('submit-btn')).toHaveText('Submit Form');


//await page.locator('xpath=//button[normalize-space()="Click Me"]').click();
//await page.locator('css=button[role="button"]').click();

//await page.getByText('Details (Open Shadow)').click();


    // await page.goto('http://127.0.0.1:5500/tests/iframeapp.html');


    // const frame = page.frameLocator('#loginFrame');


    // const password = await frame.getByLabel('Password');

    // await password.fill('myPassword');

    // await frame.getByRole('button', {name:'Login'});

    // await page
    // .getByRole('listitem')
    // .filter({ hasText: 'Product 2' })
    // .getByRole('button', { name: 'Add to cart' })
    // .click();

    

// page.on('dialog', dialog => dialog.accept());
// await page.getByText('Show Confirm').click();

// await page.evaluate('(() => {window.waitForPrintDialog = new Promise(f => window.print = f);})()');
// await page.getByText('Print Page').click();
// await page.waitForFunction('window.waitForPrintDialog');

// page.on('dialog', async dialog => {
//   if (dialog.type() === 'beforeunload') await dialog.dismiss();
// });
// await page.close({ runBeforeUnload: true });

// page.on('dialog', dialog => console.log(dialog.message())); // ❌ Will stall
// await page.getByText('Show Prompt').click();


await page.locator('xpath=//input[@placeholder="Enter name"]').fill('Swati');
await page.waitForTimeout(5000);

await page.getByLabel('Birth date').fill('2025-08-19');
await page.waitForTimeout(5000);

await page.getByLabel('Appointment time').fill('20:20');
await page.waitForTimeout(5000);

await page.getByLabel('Local time').fill('2025-08-19T20:20');
await page.waitForTimeout(5000);

await page.getByLabel('I agree to the terms above').check();

expect(page.getByLabel('I agree to the terms above')).toBeChecked();

await page.getByLabel('Subscribe to newsletter').check();
expect(page.getByLabel('Subscribe to newsletter')).toBeChecked();

// await page.locator('input[type="radio"][value = "M"]').check();
// expect(page.locator('input[type="radio"][value = "M"]')).toBeChecked();

// await page.locator('input[type="radio"][value = "L"]').check();
// expect(page.locator('input[type="radio"][value = "L"]')).toBeChecked();

await page.getByLabel('XL').check();
expect(page.getByLabel('XL')).toBeChecked()

const dropdownSelect = page.getByLabel('Choose a color');
await dropdownSelect.selectOption("Green");
await page.waitForTimeout(5000);

const multiDropdownSelect = page.getByLabel('Choose multiple colors');
await multiDropdownSelect.selectOption(["blue", "green"]);


const keyboardEvent = page.locator('xpath=//button[normalize-space()="Generic Button"]');
await keyboardEvent.press('Enter');


await page.locator('xpath=//input[@aria-label="Upload files"]').setInputFiles([
  path.join(__dirname, 'text.txt'),
  path.join(__dirname, 'text1.txt'),
]);

await page.locator('//div[@id="item-to-be-dragged"]').dragTo(page.locator("//div[@id='item-to-drop-at']"));
await page.locator("//div[normalize-space()='Row 8']").click();

await page.getByText('Footer text').scrollIntoViewIfNeeded();

// Position the mouse and scroll with the mouse wheel
await page.getByTestId('scrolling-container').hover();
await page.mouse.wheel(0, 10);

await page.mouse.wheel(0, -10);

// Alternatively, programmatically scroll a specific element
await page.getByTestId('scrolling-container').evaluate(e => e.scrollTop += 100);





});
