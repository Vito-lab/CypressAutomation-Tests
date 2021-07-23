/// <reference types="Cypress" />

describe('CustomTest', function() {
    // before(() => {
    //     cy.fixture('example').then(function(data) {
    //         this.data=data
    //     })
    // })
    it('First Custom Text', function() {
        cy.login('admin@yourstore.com', 'admin') // we got command login by creating it in support/commands.js
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        cy.get(".nav > :nth-child(3) > a").click() // logout
        cy.login('admin@yourstore.com', 'admin8')
        cy.title().should('be.equal', 'Your store. Login')

        cy.login('admin@yourstore123.com', 'admin')
        cy.title().should('be.equal', 'Your store. Login')
    })
    it('Add costumer', function() {
        // cy.visit("https://admin-demo.nopcommerce.com/login")
        // cy.get("#Email").clear().type(this.data.email)
        // cy.get("#Password").clear().type(this.data.password)
        // cy.get("input[type=submit]").click()
        cy.log("**********adding costumer**********")
    })
    it('Edit costumer', function() {
        // cy.visit("https://admin-demo.nopcommerce.com/login")
        // cy.get("#Email").clear().type(this.data.email)
        // cy.get("#Password").clear().type(this.data.password)
        // cy.get("input[type=submit]").click()
        cy.log("**********editing costumer**********")
    })
})