describe("Register Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/register");
  });

  it("The register page should have '/register' url", () => {
    cy.url().should("include", "/register");
  });

  it("should set register button disabled by default", () => {
    cy.get(".register-button").should("be.disabled");
  });

  it("should enable register button when all info is filled out correctly", () => {
    cy.get(".username-input").type("abc");
    cy.get(".email-input").type("abc@gmail.com");
    cy.get(".password-input").type("abc123def");
    cy.get(".register-button").should("not.be.disabled");
  });

  it("should not enable register button when all info is filled out but email is incorrect", () => {
    cy.get(".username-input").type("abc");
    cy.get(".email-input").type("abc@");
    cy.get(".password-input").type("abc123def");
    cy.get(".register-button").should("be.disabled");
  });

  it("should take you to login page when sign-in button is clicked", () => {
    cy.get(".sign-in-link").click();
    cy.url().should("include", "/login");
  });

  it("should successfully register and send to home page when valid info provided", () => {
    cy.get(".username-input").type("abc" + rando(8));
    cy.get(".email-input").type("abc" + rando(8) +"@gmail.com");
    cy.get(".password-input").type("abc123def");
    cy.get(".register-button").click();
    cy.url().should("include", "/home")
  });

  describe("password strength indicator", () => {
    it("should not be present when password field is empty", () => {
      cy.get(".strength-info").should("not.exist");
    });

    it("should be 'Too weak' when password strength is weak", () => {
      cy.get(".password-input").type("abc");
      cy.get(".strength-info").should("contain", "Too weak");
    });

    it("should be 'Good' when password strength is good", () => {
      cy.get(".password-input").type("abc123def");
      cy.get(".strength-info").should("contain", "Good");
    });

    it("should be 'Excellent' when password strength is strong", () => {
      cy.get(".password-input").type("abc123def!_GHI$");
      cy.get(".strength-info").should("contain", "Excellent");
    });
  });
});

function rando(num) {
  let out = "";
  let letters = "abcdefghijklmnopqrstuvwxyz1234567890";
  for (let i = 0; i < num; i++) {
    out += letters[Math.floor(letters.length * Math.random())]
  }
  return out;
}
