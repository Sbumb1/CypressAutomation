 /// <reference types="cypress" />

 describe("Navigate", function(){
     it("Navigating through websites", function(){

        cy.visit("https://emag.ro")
        cy.get("input[type=search]").type("biciclete");
        cy.get("#masthead > div > div > div.navbar-searchbox > div > form > div.input-group.searchbox-input > div.input-group-btn > button.btn.btn-default.searchbox-submit-button > i").click()

        cy.scrollTo(0,300)
        
        cy.wait(1000)
        cy.get("#card_grid > div:nth-child(2) > div.card > div > div.card-section-btm > div.card-footer > form > button").click()
        
        cy.get("#my_cart > i").click({force : true})

        cy.go("back")
        cy.location('https://www.emag.ro/search/biciclete?ref=effective_search').should('not.include', 'navigation')

        cy.get("#card_grid > div:nth-child(2) > div.card > div > div.card-section-btm > div.card-footer > form > button").click()



        
    })
 })