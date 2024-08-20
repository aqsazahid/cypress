describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })
  it('front page can be opened', function() {
    cy.get('#username').type('aqsa11')
    cy.get('#password').type('123456789')
    cy.get('#login-btn').click()
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error for debugging
    console.error(err);
  
    // Prevent Cypress from failing the test
    return false;
  });
})