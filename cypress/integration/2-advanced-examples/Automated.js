 /// <reference types="cypress" />

describe('Locating elements', function(){
    it("Buy laptops",function(){

        //first,entry in the website
        cy.visit("https://demo.nopcommerce.com/")

        //get the search element with id selector and type something
        cy.get("#small-searchterms").type("Apple macbook pro 13-inch")

        //click the search button 
        cy.get("#small-search-box-form > button").click()

        //add to cart 
        cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.search-results > div > div.products-wrapper > div > div > div > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button").click()

        //modify quantity to 2
        cy.get("#product_enteredQuantity_4").clear().type('2')

        //add to cart 2 products
        cy.get("#add-to-cart-button-4").click()

        //sleep program for 5 minutes
        cy.wait(5000)

        //verify the shopping cart
        cy.get("#topcartlink > a").click()

        //scrolling down
        cy.scrollTo(0,300)

        //accept the terms 
        cy.get("#termsofservice").check()

        //checkout the command
        cy.get("#checkout").click()

        //add email and password
        cy.get("#Email").type("bmb.sami@yahoo.com")
        cy.get("#Password").type("sami")

        cy.wait(3000)

        //login
        cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.buttons > button").click()



    })
}) 