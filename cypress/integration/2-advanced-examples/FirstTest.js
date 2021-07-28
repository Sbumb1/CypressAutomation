describe('My first Test', function(){
    it('Verify Title Of The Page',function(){

        cy.visit('https://www.facebook.com/')
        cy.title().should('eq','Facebook')
        
    })
    
    it('Verify Title Of The Page-error',function(){

        cy.visit('https://www.facebook.com/')
        cy.title().should('eq','Facebook.com')
        
    })

})

// ./node_modules/.bin/cypress (open || run headed/spec"file path"/browser chrome)