 /// <reference types="cypress" />

 describe("Youtube search" , function(){
     it("Search something", function(){

        cy.visit("https://www.youtube.com/")

        cy.get("#search").type("vladimir pustan")
        cy.get("#search-icon-legacy > yt-icon").click()

        
     })
 })