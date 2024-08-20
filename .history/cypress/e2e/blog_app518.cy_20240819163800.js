describe('Blog app', function() {
    beforeEach(function() {
      // empty the db here
      cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
      // create a user for the backend here
      const user = {
            name: 'Matti Luukkainen',
            username: 'mluukkai',
            password: 'secret'
          }
          cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
          cy.visit('')
    //   cy.visit('http://localhost:5173')
    })
  
    it('Login form is shown', function() {
      // ...
    })
  
    describe('Login',function() {
      it('succeeds with correct credentials', function() {
        // ...
      })
  
      it('fails with wrong credentials', function() {
        // ...
      })
    })
  })