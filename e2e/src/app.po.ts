import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(location: string = "") {
    return browser.get('/' + location);
  }

  get registerButton() {
    return element(by.className("register-btn"));
  }

  get loginButton() {
    return element(by.className("login-btn"));
  }

  get startButton() {
    return element(by.className("btn-home"));
  }

  get strengthInfo() {
    return element(by.className("strength-info"));
  }

  get passwordInput() {
    return element(by.className("password-input"));
  }

  get createAccountButton() {
    return element(by.className("create-btn"));
  }

  get registerEmail() {
    return element(by.className("register-email"));
  }

  get registerUsername() {
    return element(by.className("register-username"));
  }

  get signInLink() {
    return element(by.className("sign-in-link"));
  }

  get createAccount() {
    return element(by.className("create-account"));
  }

  get forgotPassword() {
    return element(by.className("forgot-password"));
  }

  get loginEmailInput() {
    return element(by.className("login-email-input"));
  }

  get loginPasswordInput() {
    return element(by.className("login-password-input"));
  }

  get invalidLogin() {
    return element(by.className("invalid"));
  }

  get actualLoginButton() {
    return element(by.className("actual-login-btn"));
  }

}
