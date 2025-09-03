import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { customLogger } from '../logger/customLogger';

// test('Login test with POM + logger', async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.goto();
//   await loginPage.login('standard_user', 'secret_sauce');
//   await loginPage.verifyLoginSuccess();
// });


const logger = new customLogger();

test('Login test with logger', async ({ page }) => {
 logger.info('Navigating to login page');

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifyLoginSuccess();

});
