/// <reference types="Cypress" />

describe('Navigations', function() {
    it('Navigation test', function() {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq', 'nopCommerce demo store') // Home page
        cy.get(".ico-register").contains("Reg").click()
        cy.title().should('eq', 'nopCommerce demo store. Register') // Register page
        cy.go('back') // method to go back to previous page
        cy.title().should('eq', 'nopCommerce demo store')
        cy.go('forward') // method to go forward to the next page
        cy.title().should('eq', 'nopCommerce demo store. Register')
        cy.go(-1) // = back
        cy.title().should('eq', 'nopCommerce demo store')
        cy.go(1) // = forward
        cy.title().should('eq', 'nopCommerce demo store. Register')
        cy.reload()
    })
})