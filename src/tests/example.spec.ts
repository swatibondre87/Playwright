import { test, expect } from '@playwright/test';
import { getTestData, getJsonArray, getJsonObject} from '../utils/testdatareader';
import { customLogger } from '../logger/customLogger';
import { TestDataGenerator } from '../utils/TestDataGenerator';

test('get started link', async ({ page }) => {
//  const user: Record<string,number> = {
//     age:20,
//     weight:40
//  };
//  console.log(user);
//  console.log(user.age);
//  for(const key in user){
//     console.log(`${key}: ${user[key]}`);

//  }

const user = getJsonObject("user");
console.log(user.name);
console.log(user.role); 


const ids = getJsonArray("ids");
console.log(ids[0]); // 101



//     const url = getTestData("base_url");
//     console.log("The base_url from testdata.json file is: " +url) ;
//   await page.goto(url);

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

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




test('generate random test data', () => {
  // Random string
  const randomString = TestDataGenerator.generateRandomString(10);
  console.log('Random String:', randomString);

  // Random alphanumeric string
  const randomAlphanumeric = TestDataGenerator.generateRandomAlphanumeric(12);
  console.log('Random Alphanumeric:', randomAlphanumeric);

  // Random integer between 1 and 100
  const randomInt = TestDataGenerator.generateRandomInteger(1, 100);
  console.log('Random Integer:', randomInt);

  // Random email
  const randomEmail = TestDataGenerator.generateRandomEmail();
  console.log('Random Email:', randomEmail);

  // Random phone number
  const randomPhone = TestDataGenerator.generateRandomPhone();
  console.log('Random Phone:', randomPhone);

  // Random date between Jan 1, 2020 and Dec 31, 2025
  const randomDate = TestDataGenerator.generateRandomDate(new Date('2020-01-01'), new Date('2025-12-31'));
  console.log('Random Date:', randomDate);
});
