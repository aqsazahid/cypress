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
    
        it('A blog can be created', function() {

        })
      })
})