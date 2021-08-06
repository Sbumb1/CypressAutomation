/// <reference types="cypress" />

describe("Login", ()=>{
    it("Go into Login", ()=>{
        cy.visit("https://phptravels.org/index.php?rp=/login")
    })

    it("Check enter email",()=>{

        cy.get("#inputEmail").click().should("be.visible").should("be.empty").type("bmb.sami@yahoo.com")


    })
})