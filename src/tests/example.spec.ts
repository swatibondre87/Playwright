import { test, expect } from '@playwright/test';
import { setDevice } from "../utils/visualUtility/deviceUtils";
// import { getTestData, getJsonArray, getJsonObject} from '../utils/testdatareader';
// import { customLogger } from '../logger/customLogger';
// import { TestDataGenerator } from '../utils/TestDataGenerator';


// test('timer test1', async ({ page }) => {

//   await page.goto('https://www.timeanddate.com/');
//  //  await page.waitForLoadState('networkidle');
//   await expect(page).toHaveScreenshot();
// });

//test('get started link', async ({ page }) => {

  


//  const user: Record<string,number> = {
//     age:20,
//     weight:40
//  };
//  console.log(user);
//  console.log(user.age);
//  for(const key in user){
//     console.log(`${key}: ${user[key]}`);

//  }

// const user = getJsonObject("user");
// console.log(user.name);
// console.log(user.role); 


// const ids = getJsonArray("ids");
// console.log(ids[0]); // 101



//     const url = getTestData("base_url");
//     console.log("The base_url from testdata.json file is: " +url) ;
//   await page.goto(url);

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// const loginData = [
//  { username: 'standard_user', password: 'secret_sauce' },   // valid creds
//  { username: 'locked_out_user', password: 'secret_sauce' }, // locked user
//  { username: 'invalid_user', password: 'wrong_pass' }       // invalid creds
// ];


// test.describe('Login Tests with Data Provider', () => {
//  for (const data of loginData) {
//    test(`Login test with username: ${data.username}`, async ({ page }) => {
//      await page.goto('https://www.saucedemo.com/v1/');


//      await page.fill('#user-name', data.username);
//      await page.fill('#password', data.password);
//      await page.click('#login-button');


//      if (data.username === 'standard_user' && data.password === 'secret_sauce') {
//        // successful login
//        await expect(page).toHaveURL(/inventory.html/);
//      } else {
//        // failed login
//        await expect(page.locator('[data-test="error"]')).toBeVisible();
//      }
//    });
//  }
// });

// const logger = new customLogger();


// test('Login test with logger', async ({ page }) => {
//  logger.info('Navigating to login page');
//  await page.goto('https://www.saucedemo.com/v1/');


//  logger.info('Filling username and password');
//  await page.fill('#user-name', 'standard_use');
//  await page.fill('#password', 'secret_sauce');


//  logger.info('Clicking login button');
//  await page.click('#login-button');


//  logger.info('Checking for inventory page load');
//  try{
//  await expect(page.locator('.product_label')).toHaveText('Products');
//  logger.info('✅ Login successful');
//  } catch (error){
//     logger.error("Login failed, unable to redirect to the homepage");
//    // throw error;
//  }
// });



// const loginData = getJsonArray("loginData"); // loads from JSON file


// test.describe("Login Tests with Data Provider", () => {
//   for (const data of loginData) {
//     test(`Login test with username: ${data.username}`, async ({ page }) => {
//       await page.goto("https://www.saucedemo.com/v1/");


//       await page.fill("#user-name", data.username);
//       await page.fill("#password", data.password);
//       await page.click("#login-button");


//       if (data.username === "standard_user" && data.password === "secret_sauce") {
//         // successful login
//         await expect(page).toHaveURL(/inventory.html/);
//       } else {
//         // failed login
//         await expect(page.locator('[data-test="error"]')).toBeVisible();
//       }
//     });
//   }
// });




// test('generate random test data', () => {
//   // Random string
//   const randomString = TestDataGenerator.generateRandomString(10);
//   console.log('Random String:', randomString);

//   // Random alphanumeric string
//   const randomAlphanumeric = TestDataGenerator.generateRandomAlphanumeric(12);
//   console.log('Random Alphanumeric:', randomAlphanumeric);

  // Random integer between 1 and 100
  // const randomInt = TestDataGenerator.generateRandomInteger(1, 100);
  // console.log('Random Integer:', randomInt);

  // // Random email
  // const randomEmail = TestDataGenerator.generateRandomEmail();
  // console.log('Random Email:', randomEmail);

  // // Random phone number
  // const randomPhone = TestDataGenerator.generateRandomPhone();
  // console.log('Random Phone:', randomPhone);

  // // Random date between Jan 1, 2020 and Dec 31, 2025
  // const randomDate = TestDataGenerator.generateRandomDate(new Date('2020-01-01'), new Date('2025-12-31'));
  // console.log('Random Date:', randomDate);
//});


// test('Validate timeanddate main content1 while ignoring the live clock-22', async ({ page }) => {


//  // 1. Navigate to the website
//  await page.goto('https://www.timeanddate.com/');


// // 2. Locate the very specific section you want to test
// // const mainContentSection = page.locator('//body/div[@class="main-content-div"]/div[@class="tad-template-index"]/div[@class="tad-layout-page"]/div[@class="tad-layout-page__content"]/article[@class="tad-layout-page__main"]/div[@class="tad-layout-content"]/div[@class="tad-layout-content__content"]/main[@class="tad-layout-content__main"]/div[@class="tad-layout-rows tad-layout-rows--block"]/div[1]/section[1]/div[1]');
//  const mainContentSection = page.locator('//div[@class="tad-tpl-index__time"]//p[1]');
//  // 3. Locate the dynamic clock element we want to ignore
// // const liveClockElement = page.locator('//a[@id="clk_box"]');
// const liveClockElement = page.locator('//span[@id="ij2"]');


// // 4. BEFORE taking a screenshot, mask the live clock to stabilize the test
// // We will cover it with a solid-colored box to completely hide its changing text
//  await liveClockElement.evaluate((element) => {
//    element.style.visibility = 'hidden'; // Hide the original clock
//  });


// 5. (Optional but good practice) Wait for any animations or lazy loading
//  await page.waitForLoadState('networkidle');
//  await mainContentSection.waitFor({ state: 'visible' });


// 6. Take a screenshot of ONLY the specific mainContentSection and compare it.
// This will fail the first time until we create the baseline.
//  expect(await mainContentSection.screenshot()).toMatchSnapshot();
// });


// test('mobile view snapshot iPad', async ({ page }) => {
// //  await page.setViewportSize({width:360, height:800});
// await setDevice(page, "iPad");  // iPhone X
//   await page.goto('https://playwright.dev/');
//   expect(await page.screenshot()).toMatchSnapshot();
// });


// test('homepage visual test', async ({ page }, testInfo) => {
//   await page.goto('https://example.com');
//   console.log(`${testInfo.title}.png`)
//   console.log(`${testInfo.outputDir}.png`)
//   console.log(`${testInfo.snapshotDir}.png`)
//   console.log(`${testInfo.retry}.png`)
//   console.log(`${testInfo.workerIndex}.png`)
//   console.log(`${testInfo.annotations}.png`)
//   expect(await page.screenshot()).toMatchSnapshot(`${testInfo.title}.png`);
// });




// import { VisualUtil } from '../utils/visualUtility/VisualUtil';

// test('Homepage full-page visual test1', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await VisualUtil.compareFullPage(page, 'homepage');
// });

// test('Docs link visual test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const docsLink = page.locator('//a[normalize-space()="Get started"]');
//   await VisualUtil.compareElement(docsLink, 'docs-link');
// });

// test('Mobile layout test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await VisualUtil.compareResponsive(page, 'homepage-mobile', 375, 812);
// });

import AxeBuilder from '@axe-core/playwright'; // 1

test.describe('homepage', () => { // 2
  test('2 should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/tests/accessibility.html'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});


test('navigation menu should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('https://your-site.com/');

  await page.getByRole('button', { name: 'Navigation Menu' }).click();

  // It is important to waitFor() the page to be in the desired
  // state *before* running analyze(). Otherwise, axe might not
  // find all the elements your test expects it to scan.
  await page.locator('#navigation-menu-flyout').waitFor();

  const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#navigation-menu-flyout')
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});


test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});


test('4 should not have any accessibility violations outside of rules with known issues', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:5500/tests/accessibility.html');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['color-contrast', 'heading-order', 'label', 'aria-required-attr'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});


test('5 navigation menu should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('button', { name: 'Navigation Menu' }).click();

  // It is important to waitFor() the page to be in the desired
  // state *before* running analyze(). Otherwise, axe might not
  // find all the elements your test expects it to scan.
  await page.locator('#navigation-menu-flyout').waitFor();

  const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#navigation-menu-flyout')
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});


test('example with attachment', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/  ');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json'
  });

  expect(accessibilityScanResults.violations).toEqual([]);
});


test('7 should not have critical accessibility violations', async ({ page }) => {
 await page.goto('https://playwright.dev/');
 const results = await new AxeBuilder({ page }).analyze();
 const criticalViolations = results.violations.filter(v => v.impact === 'serious');
 if (criticalViolations.length > 0) {
   console.log('Critical accessibility violations:', criticalViolations);
 }
 expect(criticalViolations).toEqual([]);
});


test('8 contact navigation menu should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:5500/tests/accessibility.html');

  //await page.getByRole('button', { name: 'contact' }).click();

  // It is important to waitFor() the page to be in the desired
  // state *before* running analyze(). Otherwise, axe might not
  // find all the elements your test expects it to scan.
  await page.locator("//section[@id='contact']").waitFor();

  const accessibilityScanResults = await new AxeBuilder({ page })
      .include("//section[@id='contact']")
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});