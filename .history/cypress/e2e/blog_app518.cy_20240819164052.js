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
        cy.get('form').should('be.visible');
        cy.get('input[name="Username"]').should('exist');
        cy.get('input[name="Password"]').should('exist');
        cy.get('button[type="submit"]').should('contain', 'login');
    })
  
    describe('Login',function() {
      it('succeeds with correct credentials', function() {
        cy.get('input[name="Username"]').type('mluukkai')
        cy.get('input[name="Password"]').type('secret')
        cy.get('button[type="submit"]').should('contain', 'login').click()
        cy.get('p').should('have.text', `${user.username}  logged-in`)
      })
  
      it('fails with wrong credentials', function() {
        // ...
      })
    })
  })