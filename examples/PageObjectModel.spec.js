/// <reference types="Cypress" />

import LoginPage from '../PageObjects/LoginPage.js'

describe('POM test', function() {
    it('First test', function() {
        const lp=new LoginPage()
        lp.visit()
        lp.fillEmail("admin@yourstore.com")
        lp.fillPassword("admin")
        lp.submit()
        cy.title().should('be.equal', "Dashboard / nopCommerce administration")
    })
})