import { page, expect } from "@playwright/test";

export class loginPage {
  constructor(page) {
    this.page = page;
  }

  getVerifySignupFormSelector() {
    return ".signup-form";
  }
  getHomeTextSelector() {
    return ".navbar-nav li a ";
  }
  getContactUsSelector() {
    return ".fa.fa-envelope";
  }
  getVerifyTextGetInTouchSelector() {
    return ".title.text-center";
  }
  getCredentialsSelector() {
    return ".form-control";
  }

  //launch browser
  async visit() {
    await this.page.goto("https://automationexercise.com/");
  }
  //Verify home page

  async verifyHomePage(data) {
    await this.page.pause();
    await expect(
      this.page.locator(this.getHomeTextSelector()).nth(0)
    ).toContainText(data.text);
  }
  //Click on contact us button
  async contactUs() {
    await this.page.locator(this.getContactUsSelector()).click();
  }
  //Verify text 'get in touch'
  async VerifyText(data) {
    await expect(
      this.page.locator(this.getVerifyTextGetInTouchSelector()).nth(1)
    ).toContainText(data.text);
  }
  //Enter credentials
  async credentials(data) {
    await this.page
      .locator(this.getCredentialsSelector())
      .nth(0)
      .fill(data.name);
    await this.page
      .locator(this.getCredentialsSelector())
      .nth(1)
      .fill(data.email);
    await this.page
      .locator(this.getCredentialsSelector())
      .nth(2)
      .fill(data.subject);
    await this.page
      .locator(this.getCredentialsSelector())
      .nth(3)
      .fill(data.comments);
    await this.page.pause();
    await this.page.on("dialog", (dialog) => dialog.accept());

    await this.page.locator('[data-qa="submit-button"]').click();
    // await this.page.on("dialog", (dialog) => console.log(dialog.message()));
    // await this.page.getByRole("button").click();
  }
  //verify success message
  async verifySuccessMessage() {
    await expect(this.page.locator(".status.alert.alert-success")).toHaveText(
      "Success! Your details have been submitted successfully."
    );
  }
  //come on home page
  async homePage() {
    await this.page.locator(".btn.btn-success").click();
  }
}
