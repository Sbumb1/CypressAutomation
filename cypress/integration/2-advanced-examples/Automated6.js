/// reference types="cypres" />

describe("Automate a Table test", function(){

    it("Table test", () => {

        cy.visit("https://testautomationpractice.blogspot.com")

        //get the table and check any value from it

        cy.get("table[name=BookTable]").contains("td","Learn Selenium").should("be.visible")

        //check the value from a specific row and column

        cy.get("table[name=BookTable] > tbody >tr:nth-child(2) > td:nth-child(3)").contains("Selenium").should("be.visible")

        cy.get("table[name=BookTable] > tbody > tr:nth-child(7) > td:nth-child(4)").contains("1000").should("be.visible")
 
        //verify the book name "Master in Java" where autor is Amod
        cy.get("table[name=BookTable] > tbody >tr td:nth-child(2)").each(($e,index,$list) =>{

        const text = $e.text()
        
         if(text.includes("Amod")){
            cy.get("table[name=BookTable]>tbody>tr td:nth-child(1)").eq(index).then(function(bname){

               const bookName = bname.text()

               expect(bookName).to.equal("Master In Java")
            })
        }
        })
        
    })

})