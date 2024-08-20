describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')

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
            // Log in
            cy.get('#username').type('aqsa11')
            cy.get('#password').type('123456789')
            cy.get('#login-btn').click()
      
            // Verify login succeeded
            cy.contains('aqsa11 logged-in', { timeout: 30000 })
      
            // Create a blog
            cy.contains('create new blog').click()
            cy.get('#title').type('Test Blog Title')
            cy.get('#author').type('Test Author')
            cy.get('#url').type('http://testblog.com')
            cy.get('#create-blog-button').click()
      
            // Ensure the blog appears in the list
            cy.contains('Test Blog Title Test Author')
        })
        it('User can delete their own blog', function() {
            // Find the blog and click the delete button
            cy.contains('Test Blog Title Test Author')
              .parent() // Go to the parent element containing the blog details and delete button
              .find('button') // Assuming the delete button is the first button
              .contains('delete') // Look for the delete button specifically
              .click()
      
            // Ensure the blog is removed from the list
            cy.contains('Test Blog Title Test Author').should('not.exist')
        })
    })
})