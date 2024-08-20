describe('user can like blog', function (){
    beforeEach(function() {
        //cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)

        // Create a user
        const user = {
          name: 'Aqsa',
          username: 'umair43',
          password: '123456789'
        }
        cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
    
        // Visit the app
        cy.visit('')
    })
    describe('When logged in', function() {
        beforeEach(function() {
            // Log in the user
            cy.get('#username').type('umair43')
            cy.get('#password').type('123456789')
            cy.get('#login-btn').click()
            // Verify login succeeded
            cy.contains('umair43 logged-in', { timeout: 30000 })
            
            // Create a blog
            cy.contains('create new blog').click()
            cy.get('input[name="title"]').type('New Umair Title');
            cy.get('input[name="author"]').type('Test Author Umair');
            cy.get('input[name="url"]').type('www.url.com');
            cy.get('#create-blog-button').click()
            
            // Ensure the blog is visible in the list
            cy.contains('New Umair Title Test Author Umair', { timeout: 30000 })
          })
          it('User can like a blog', function() {
            cy.contains('New Umair Title Test Author Umair').parent() // Go to the parent element (which should contain the blog details and like button)
            .find('.like-btn') // Assuming the like button is the first button
            .click()
            cy.contains('like').click()
            //   .parent() 
            //   .contains('like')
            //   .click()
            
            // Verify the like count has increased
            cy.contains('Test Blog Title Test Author')
            .parent()
            .contains('likes 1')// Adjust this if your like count is displayed differently
          })
      
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error(err);
        return false;
      });
    
})