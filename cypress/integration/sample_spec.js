describe('Home Page', () => {
  it("The home button should go to the register page", () => {
    cy.visit('http://localhost:4200');
    cy.get('.btn-home').click();
    cy.url().should('include', '/register')
  });

  it("The home button should go to the register page", () => {
    cy.visit('http://localhost:4200');
    cy.get('.register-btn').click();
    cy.url().should('include', '/register')
  });

  it("The home button should go to the register page", () => {
    cy.visit('http://localhost:4200');
    cy.get('.login-btn').click();
    cy.url().should('include', '/login')
  });
});

describe('Register Page', () => {
  before(() => {
    cy.visit('http://localhost:4200/register');
  });

  it("should show the weak password indicator when the password is weak", () => {
    cy.get('.password-input').type("weak");
    cy.get('.strength-info').should('have.value', 'Too weak');
  });

  it("should show the good password indicator when the password is good", () => {
    cy.get('.password-input').type("Password101");
    cy.get('.strength-info').should('have.value', 'Good');
  });

  it("should show the excellent password indicator when the password is excellent", () => {
    cy.get('.password-input').type("Password101!");
    cy.get('.strength-info').should('have.value', 'Excellent');
  });
});
