 /// <reference types="cypress" />

 describe("Get into account", function(){
     it.only("Let's get into", function(){
         cy.visit("https://www.facebook.com/")

         cy.get("#email").type("bmb.sami@yahoo.com")
         cy.get("#pass").type("samisami")

         cy.get("#loginbutton").click()

         cy.get("#content > div > div > div.phl.ptm.uiInterstitialContent > ul > li > div > a").click()

         cy.get("#email").type("bmb.sami@yahoo.com")
         cy.get("#pass").type("samisami")

         cy.get("#u_0_d_6A").click()
     })
 })