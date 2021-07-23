/// <reference types="Cypress" />

describe('Fixtures', function() {
    before(() => {
        cy.fixture('example').then(function(data) {
            this.data=data
        })
    })
    it('First fixtures test', function() {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("#Email").clear().type(this.data.email)
        cy.get("#Password").clear().type(this.data.password)
        cy.get("input[type=submit]").click()
    })
})