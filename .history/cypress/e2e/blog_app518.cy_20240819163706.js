describe('Blog app', function() {
    beforeEach(function() {
      // empty the db here
      // create a user for the backend here
      cy.visit('http://localhost:5173')
    })
  
    it('Login form is shown', function() {
      // ...
    })
  
    describe('Login',function() {
      it('succeeds with correct credentials', function() {
        // ...
      })
  
      it('fails with wrong credentials', function() {
        // ...
      })
    })
  })