describe('Blog app', function() {
    beforeEach(function() {
        // Reset the database
        cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
    
        // Create a user
        const user = {
          name: 'User A',
          username: 'usera',
          password: 'passwordA'
        }
        cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
    
        // Log in the user
        cy.visit('http://localhost:5173')
        cy.get('#username').type('usera')
        cy.get('#password').type('passwordA')
        cy.get('#login-btn').click()
    
        // Create multiple blogs with different like counts
        cy.createBlog({ title: 'Blog with fewest likes', author: 'Author A', url: 'http://example1.com', likes: 2 })
        cy.createBlog({ title: 'Blog with second most likes', author: 'Author B', url: 'http://example2.com', likes: 7 })
        cy.createBlog({ title: 'Blog with most likes', author: 'Author C', url: 'http://example3.com', likes: 15 })
    })
    it('Blogs are ordered by likes', function() {
        cy.get('.blog').eq(0).should('contain', 'Blog with most likes')
        cy.get('.blog').eq(1).should('contain', 'Blog with second most likes')
        cy.get('.blog').eq(2).should('contain', 'Blog with fewest likes')
      })

})