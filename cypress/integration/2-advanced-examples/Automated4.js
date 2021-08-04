/// <reference types ="cypress" />

describe("UI Elements", function(){
    it.only("Verify input box and radio button", ()=>{

        //get into URL
        cy.visit("http://newtours.demoaut.com/") 

        //if URL contains a specified word
        cy.url().should('include','newtours')

        //verify username and password
        cy.get("input[name=userName]").should("be.visible").should("be.enabled").type("sami")
        cy.get("input[name=password]").should("be.visible").should("be.enabled").type("sami")

        //enter with pressing login
        cy.get("input[name=login]").should("be.visible").click()

        //verify if the title is equal to this
        cy.title("eq","Find a Flight: Mercury Tours:")

        //checking the radio buttons
        cy.get("input[value=roundtrip]").should("be.visible").should("be.checked") //it is checked
        cy.get("input[value=oneway]").should("be.visible").should("not.be.checked").click() //it is not checked and check it by click()

        //verify the continue button
        cy.get("name[=findFlights]").should("be.visible").click() 

        //verify title
        cy.title("eq","Select a Flight: Mercury Tours")
    })

    it.only("Verify check box", function(){

        cy.visit("http://demo.automationtesting.in/Register.html")

        //check the box with condition and verify the values 
        cy.get("#checkbox1").check().should("be.checked").and("have.value","Cricket")
        cy.wait(1000)
        cy.get("#checkbox2").check().should("be.checked").and("have.value","Movies")
        cy.wait(1000)

        cy.get("#checkbox3").check().should("be.checked").and("have.value","Hockey")
        cy.wait(1000)

        //uncheck the boxes with condition using should()
        cy.get("#checkbox1").uncheck().should("not.be.checked")
        cy.wait(1000)
        cy.get("#checkbox2").uncheck().should("not.be.checked")
        cy.wait(1000)
        cy.get("#checkbox3").uncheck().should("not.be.checked")
        cy.wait(1000)

        //check multiple boxes at the same time
        cy.get("[type=checkbox").check(["Cricket","Hockey"])

    })


    it.only("Verify drop downs", function(){

        cy.get("#Skills").select("Android").should("have.value","Android")

    })

    it.only("Languages multi select", function(){

        cy.get("#msdd").click()
        
        cy.get(".ui-corner-all").contains("English").click()
        cy.get(".ui-corner-all").contains("Japanese").click()

    })

    it.only("Select countries from searchable drop-down",function(){

        //force click on the drop down,when another one is opened on the first one
        cy.get("[role=combobox]").click({force : true});
        
        //enter the found result
        cy.get(".select2-search__field").type("Ind")
        cy.get(".select2-search__field").type("{enter}")
    })
})