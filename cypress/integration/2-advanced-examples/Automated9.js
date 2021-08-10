/// <reference types="cypress" />

describe("Login", ()=>{
    it("Go into Login", ()=>{
        cy.visit("https://phptravels.org/index.php?rp=/login")
    })

    it("Check enter email",()=>{

        cy.get("#inputEmail").should("be.visible").should("be.empty").and("have.attr","placeholder","Enter email").type("bmb.sami@yahoo.com")
    })

    it("Check password input", ()=>{

        cy.get("input[type=password]").click().should("be.visible").should("be.empty").should("have.attr","placeholder","Password")
    })

    it("Check 'Remember me' box", ()=>{

    })

    it("Check 'I am not a robot' box", ()=>{

    })

    it("Check Forgot password button", ()=>{

    })

    it("Check Login button", ()=>{

    })

})