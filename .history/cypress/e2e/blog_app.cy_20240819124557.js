describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })
  it('front page can be opened', function() {
    cy.get('#username').type('mluukkai')
  cy.get('#password').type('salainen')
    // cy.get('login-in-btn').click()
  })
})