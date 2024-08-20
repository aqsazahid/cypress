describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })
  it('front page can be opened', function() {
    cy.get('#username').type('aqsa11')
    cy.get('#password').type('123456789')
    cy.get('login-in-btn').click()
  })
})