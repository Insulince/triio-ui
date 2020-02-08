describe("Login Page", () => {
  let user = "";
  let pass = "";

  beforeEach(() => {
    cy.visit("http://localhost:4200/register");
    user = rando(12);
    pass = rando(12) + "_!aA1";
    cy.get(".username-input").type(user);
    cy.get(".email-input").type(user + "@gmail.com");
    cy.get(".password-input").type(pass);
    cy.get(".register-button").click();
    cy.visit("http://localhost:4200/login");
  });

  it("A valid login should bring the user to the dashboard", () => {
    cy.get(".email-input").type(user + "@gmail.com");
    cy.get(".password-input").type(pass);
    cy.get(".actual-login-btn").click();
    cy.url().should("include", "/dashboard")
  });

  it("clicking 'create an account' button takes you to the register page", () => {
    cy.get(".create-account").click();
    cy.url().should("include", "/register")
  });
});

function rando(num) {
  let out = "";
  let letters = "abcdefghijklmnopqrstuvwxyz1234567890";
  for (let i = 0; i < num; i++) {
    out += letters[Math.floor(letters.length * Math.random())];
  }
  return out;
}
