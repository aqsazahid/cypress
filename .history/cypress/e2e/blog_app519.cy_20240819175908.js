describe('Blog app', function() {
    describe('When logged in', function() {
        beforeEach(function() {
            cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)

            // Create a user
            const user = {
              name: 'Aqsa',
              username: 'aqsa11',
              password: '123456789'
            }
            cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
        
            // Visit the app
            cy.visit('')
        })
    
        describe('When logged in', function() {
            beforeEach(function() {
              // Log in the user
              cy.get('#username').type('aqsa11')
              cy.get('#password').type('123456789')
              cy.get('#login-button').click()
              
              // Verify login succeeded
              cy.contains('aqsa11 logged in')
            })
        
            it('A blog can be created', function() {
              // Open the form to create a new blog
              cy.contains('create new blog').click()
        
              // Fill in the blog details
              cy.get('#title').type('Test Blog Title')
              cy.get('#author').type('Test Author')
              cy.get('#url').type('http://testblog.com')
        
              // Submit the form
              cy.get('#create-blog-button').click()
        
              // Verify the blog appears in the list
              cy.contains('Test Blog Title Test Author')
            })
          })
      })
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.error(err);
        return false;
      });
})