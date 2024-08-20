describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })
  it('front page can be opened', async function() {
    cy.get('#username').type('aqsa11')
    cy.get('#password').type('123456789')
    cy.get('#login-btn').click()
    await cy.contains('aqsa11 logged-in')
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.error(err);
    return false;
  });
})