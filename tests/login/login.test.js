const { test } = require("@playwright/test");
import { loginPage } from "../../page/login/loginPo";
const data = require("../../fixture/pageContent.json");

test("login test", async ({ page }) => {
  const login = new loginPage(page);
  await login.visit();
  await login.verifyHomePage(data.verifyHomePageText[0]);
  await login.contactUs();
  await login.VerifyText(data.VerifyText[0]);
  await login.credentials(data.credentials[0]);
  await login.verifySuccessMessage();
  await login.homePage();
});
