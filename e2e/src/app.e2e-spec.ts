import { AppPage } from "./app.po";
import {browser} from "protractor";
describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
  });

  describe("Home page", () => {

    beforeEach(() => {
      page.navigateTo();
    });

    it("Clicking the 'get started' button should navigate to register page", () => {
      const startButton = page.startButton;
      startButton.click();
      expect(browser.getCurrentUrl()).toMatch(/^.*\/register$/);
    });

    it("Clicking the 'Login' button should navigate to login page", () => {
      const loginButton = page.loginButton;
      loginButton.click();
      expect(browser.getCurrentUrl()).toMatch(/^.*\/login$/);
    });

    it("Clicking the 'Register' button should navigate to register page", () => {
      const registerButton = page.registerButton;
      registerButton.click();
      expect(browser.getCurrentUrl()).toMatch(/^.*\/register$/);
    });
  });

  describe("Register Page", () => {

    let passwordInput;
    let strengthInfo;
    let createAccountBtn;
    let usernameInput;
    let emailInput;

    beforeAll(() => {
      page.navigateTo("register");
      passwordInput = page.passwordInput;
      strengthInfo = page.strengthInfo;
      createAccountBtn = page.createAccountButton;
      usernameInput = page.registerUsername;
      emailInput = page.registerEmail;
    });

    it("the create account button should be disabled when there is no input", () => {
      expect(createAccountBtn.getAttribute('disabled')).toEqual('true');
    });

    it("should show weak indicator if password is weak", () => {
      passwordInput.sendKeys("bad password");
      expect(strengthInfo.getText()).toEqual("Too weak");
    });

    it("should show good indicator if password is good", () => {
      passwordInput.sendKeys("Password101");
      expect(strengthInfo.getText()).toEqual("Good");
    });

    it("should show excellent indicator if password is excellent", () => {
      passwordInput.sendKeys("Password101!");
      expect(strengthInfo.getText()).toEqual("Excellent");
    });

    it("should take you to the login page when you click sign in", () => {
      const signInLink = page.signInLink;
      signInLink.click();
      expect(browser.getCurrentUrl()).toMatch(/^.*\/login$/);
    });

    xit("should eneable the create account button when all inputs are filled out correctly", () => {
      usernameInput.sendKeys("Bjarne");
      emailInput.sendKeys("Bjarne@gmail.com");
      passwordInput.sendKeys("Password101!");
      expect(createAccountBtn.getAttribute('disabled')).toEqual('false');
    });

  });

  describe("Login Page", () => {

    let loginEmailInput;
    let loginPasswordInput;

    beforeEach(() => {
      page.navigateTo("login");
      loginEmailInput = page.loginEmailInput;
      loginPasswordInput = page.loginPasswordInput;
    });

    it("should redirect you to the help page if you click 'forgot your password'", () => {
      const forgotPassword = page.forgotPassword;
      forgotPassword.click();
      expect(browser.getCurrentUrl()).toMatch(/^.*\/help$/);
    });

    it("should redirect you to the register page if you click 'create an account'", () => {
      const createAccount = page.createAccount;
      createAccount.click();
      expect(browser.getCurrentUrl()).toMatch(/^.*\/register$/);
    });

    it("should show invalid indicator when there is an invalid username and password", () => {
      loginEmailInput.sendKeys("bjarne");
      loginPasswordInput.sendKeys("stroustrop");
      let invalidLogin = page.invalidLogin;
      let loginButton = page.actualLoginButton;
      loginButton.click();
      expect(invalidLogin.getText()).toEqual("Invalid email or password.");

    });

  });

});
