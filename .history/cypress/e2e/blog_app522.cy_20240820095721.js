describe('Blog app', function() {
    beforeEach(function() {
        // Reset the database
        cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)

        // Create User A
        const userA = {
          name: 'User A',
          username: 'usera',
          password: 'passwordA'
        }
        cy.request('POST', `${Cypress.env('BACKEND')}/users`, userA)
    
        // Create User B
        const userB = {
          name: 'User B',
          username: 'userb',
          password: 'passwordB'
        }
        cy.request('POST', `${Cypress.env('BACKEND')}/users`, userB)
    
        // Visit the app
        cy.visit('http://localhost:5173')
    })
    it('Only the creator can see the delete button of a blog', function() {
        // Log in as User A
        cy.get('#username').type('usera')
        cy.get('#password').type('passwordA')
        cy.get('#login-btn').click()
        cy.contains('User A logged in')
    
        // Create a blog as User A
        cy.contains('create new blog').click()
        cy.get('#title').type('User A Blog')
        cy.get('#author').type('Author A')
        cy.get('#url').type('http://userablog.com')
        cy.get('#create-blog-button').click()
    
        // Ensure the blog appears in the list
        cy.contains('User A Blog Author A', { timeout: 30000 })
    
        // Log out User A
        cy.get('#logout-btn').click()
        cy.contains('Log in')
    
        // Log in as User B
        cy.get('#username').type('userb')
        cy.get('#password').type('passwordB')
        cy.get('#login-btn').click()
        cy.contains('User B logged in')
    
        // Check that User B cannot see the delete button for User A's blog
        cy.contains('User A Blog Author A', { timeout: 30000 })
          .parent()
          .find('button')
          .should('not.contain', 'delete')
    
        // Log out User B
        cy.get('#logout-btn').click()
        cy.contains('Log in')
    
        // Log back in as User A
        cy.get('#username').type('usera')
        cy.get('#password').type('passwordA')
        cy.get('#login-btn').click()
        cy.contains('User A logged in')
    
        // Check that User A can see the delete button for their blog
        cy.contains('User A Blog Author A')
          .parent()
          .find('button')
          .contains('delete')
    })
})