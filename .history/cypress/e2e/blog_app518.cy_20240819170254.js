describe('Blog app', function() {
    beforeEach(function() {
      // empty the db here
      cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
      // create a user for the backend here
      const user = {
            name: 'Matti Luukkainen',
            username: 'aqsa11',
            password: '123456789'
          }
          cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
          //cy.visit('')
    cy.visit('http://localhost:5173')
    })
  
    // it.only('Login form is shown', function() {
    //     cy.get('form').should('be.visible');
    //     cy.get('input[name="Username"]').should('exist');
    //     cy.get('input[name="Password"]').should('exist');
    //     cy.get('button[type="submit"]').should('contain', 'login');
    // })
  
    describe('Login',function() {
    //   it.only('succeeds with correct credentials', function() {
    //     cy.get('input[name="Username"]').type('aqsa11')
    //     cy.get('input[name="Password"]').type('123456789')
    //     cy.get('button[type="submit"]').click()
    //     cy.contains('aqsa11 logged-in')
    //   })
  
    //   it('fails with wrong credentials', function() {
    //     cy.get('input[name="username"]').type('aqsa11');
    //     cy.get('input[name="password"]').type('wrongpassword');
    //     cy.get('button[type="submit"]').click();
    //     cy.get('.notification').should('contain', 'Wrong username or password');
    //     cy.get('.notification').should('have.css', 'color', 'red'); // Assuming the error message is styled in red
    //   })
    })
  })