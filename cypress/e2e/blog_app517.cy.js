describe('Blog app', function() {
 
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })

  it('Login form is shown', function() {
    cy.get('form').should('be.visible');
    cy.get('input[name="Username"]').should('exist');
    cy.get('input[name="Password"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'login');
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.error(err);
    return false;
  });
})