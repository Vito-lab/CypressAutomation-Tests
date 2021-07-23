/// <reference types="Cypress" />

describe('Table Tests', function() {
    it('Check value presence anywhere in the table', function() {
        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get("table[name=BookTable]").contains('td', 'Learn Selenium').should('be.visible')
    })
    it('Check value presence in specific row or column', function() {
        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get("#HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(3)").contains('Selenium').should('be.visible')
        // checked if 2nd row's 3rd column contains Selenium and is visible
    })
    it('Check value presence based on condition by iterating rows', function() {
        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get("table[name=BookTable] > tbody > tr td:nth-child(2)").each(($e, index, $list) => {
            const text=$e.text()
            if(text.includes("Amod")) {
                cy.get("table[name=BookTable] > tbody > tr td:nth-child(1)").eq(index).then(function(bname) {
                    const bookName= bname.text()
                    expect(bookName).to.equal("Master In Java")
                })
            }
        })
        // checked all values in 2nd column, then took value "Amod", then checked if "Amod" has value "Master In Java" in 1st column
    })
})