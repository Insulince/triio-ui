describe('Login Page', () => {
  it("The home button should go to the login page", () => {
    cy.visit('http://localhost:4200/login');
    //cy.get('.btn-home').click();
    cy.url().should('include', '/login')
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/login");
    cy.get(".email-input").type("abc@gmail.com");
    cy.get(".password-input").type("password");
    cy.get(".btn login-btn").click();
  });


});
