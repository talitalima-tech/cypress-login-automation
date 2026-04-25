describe('teste login', () => {
  it('login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(2000)
    cy.get('[data-test="username"]').type('standard_user');
    cy.wait(2000)
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

  })
})
describe('teste login', () => {
  it('login com credenciais inválidas', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(2000)
    cy.get('[data-test="username"]').type('teste');
    cy.wait(2000)
    cy.get('[data-test="password"]').type('teste');
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');

  })
})
