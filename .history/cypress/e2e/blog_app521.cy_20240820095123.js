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
})