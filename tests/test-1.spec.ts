import { test, expect } from '@playwright/test';

test('locator demo', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/tests/locators.html');

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
    await page.getByTestId('submit-btn').click();
   // await expect(page.getByTestId('submit-btn')).toHaveText('Submit Form');




    // await page.goto('http://127.0.0.1:5500/tests/iframeapp.html');


    // const frame = page.frameLocator('#loginFrame');


    // const password = await frame.getByLabel('Password');

    // await password.fill('myPassword');

    // await frame.getByRole('button', {name:'Login'});


});
