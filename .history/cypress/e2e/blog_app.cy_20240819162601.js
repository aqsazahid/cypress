describe('Blog app', function() {
  // beforeEach(function() {

  //   cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
  //   const user = {
  //     name: 'Matti Luukkainen',
  //     username: 'mluukkai',
  //     password: 'secret'
  //   }
  //   cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
  //   cy.visit('')
  // })
  // beforeEach(function() {
  //   // cy.request('POST', 'http://localhost:3001/api/testing/reset')
  //   // const user = {
  //   //   name: 'Matti Luukkainen',
  //   //   username: 'mluukkai',
  //   //   password: 'salainen'
  //   // }
  //   // cy.request('POST', 'http://localhost:3001/api/users/', user) 
  //   // cy.visit('http://localhost:5173')
  //   cy.login({ username: 'mluukkai', password: 'salainen' })
  // })
  // it('front page can be opened', async function() {
  //   cy.get('#username').type('aqsa11')
  //   cy.get('#password').type('123456789')
  //   cy.get('#login-btn').click()
  //   await cy.contains('aqsa11 logged-in')
  // })
  beforeEach(function() {
    cy.visit('http://localhost:5173')
  })

  it('Login form is shown', function() {
    cy.get('form').should('be.visible');
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'login');
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.error(err);
    return false;
  });
})