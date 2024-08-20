describe('Note app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5173')
    cy.get(':nth-child(1) > input').contains('aqsa11')
    cy.contains('login').click()
  })
})