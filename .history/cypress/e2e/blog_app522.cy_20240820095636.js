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
})