describe('user can like blog', function (){
    beforeEach(function() {
        //cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)

        // Create a user
        const user = {
          name: 'Aqsa',
          username: 'umair32',
          password: '123456789'
        }
        cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
    
        // Visit the app
        cy.visit('')
    })
    describe('When logged in', function() {
        beforeEach(function() {
            // Log in the user
            cy.get('#username').type('umair32')
            cy.get('#password').type('123456789')
            cy.get('#login-btn').click()
            // Verify login succeeded
            cy.contains('umair32 logged-in')
            
            // Create a blog
            cy.contains('create new blog').click()
            cy.get('#title').type('Test Blog Title')
            cy.get('#author').type('Test Author')
            cy.get('#url').type('http://testblog.com')
            cy.get('#create-blog-button').click()
            
            // Ensure the blog is visible in the list
            cy.contains('Test Blog Title Test Author')
          })
          it('User can like a blog', function() {
            cy.contains('Test Blog Title Test Author').contains('have.text', 'view').click()
            cy.click('like').click()
            //   .parent() 
            //   .contains('like')
            //   .click()
            
            // Verify the like count has increased
            cy.contains('Test Blog Title Test Author')
              .parent()
              .contains('likes 1') // Adjust this if your like count is displayed differently
          })
      
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error(err);
        return false;
      });
    
})