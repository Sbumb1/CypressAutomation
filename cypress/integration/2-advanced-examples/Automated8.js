 /// <reference types="cypress" />

 describe("Application Test Drive", ()=>{

    it("Tests PHPTRAVELS home button and go back to first page", ()=>{
        
        cy.visit("https://phptravels.com/demo/")

        cy.get("body > header > div > a").click();

        cy.go("back");
    })

    it("Test register form",()=>{
        
        cy.get("body > header > div > nav > a.lvl-0.sign-in.btn.btn-md.btn-white-outline").should("have.value","Login").click()
    
        cy.contains("register", {matchCase : false}).click();
    })
 })