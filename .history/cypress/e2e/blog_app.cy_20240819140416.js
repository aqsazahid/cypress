describe('Note app', function() {
  beforeEach(function() {
    // cy.request('POST', 'http://localhost:3001/api/testing/reset')
    // const user = {
    //   name: 'Matti Luukkainen',
    //   username: 'mluukkai',
    //   password: 'salainen'
    // }
    // cy.request('POST', 'http://localhost:3001/api/users/', user) 
    // cy.visit('http://localhost:5173')
    cy.login({ username: 'mluukkai', password: 'salainen' })
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