/// <reference types="Cypress" />

describe('UI elements', function() {
    it('Verify Inputbox and Radio buttons', function() {
        cy.visit("https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software/")
        cy.url().should('include','microsoft') // verify that URL contains text
        cy.get(".c-group > :nth-child(2) > .c-button").click()
        cy.visit("https://login.microsoftonline.com/common/oauth2/authorize?response_type=id_token&client_id=5e3ce6c0-2b1f-4285-8d4b-75ee78787346&redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fgo&state=fa331fbc-15e3-4135-b82a-9d77949307f1&&client-request-id=4d05b983-d68f-4e56-8bad-201fabdc3c7f&x-client-SKU=Js&x-client-Ver=1.0.9&nonce=d568b6f7-5d6f-41dc-9132-a561cc73ed10&domain_hint=")
        cy.get("hereMustBeUsername").should('be.visible').should('be.enabled').type("vitoldas.vitkovskis@girteka.eu")
        cy.get("hereMustBePassword").should('be.visible').should('be.enabled').type("passwordas")
        cy.get("hereMustbeSubmit").click()
    })
    it('Title verification', function() {
        cy.visit("https://www.zigzag.lt/")
        cy.title().should('eq', 'Zigzag.lt • Pigios kelionės, aviabilietai. Stovyklos.')
        cy.get("#mf-nav > li:nth-child(3)").click()
        cy.get("#fl-one-way").should('be.visible').should('not.be.checked') // check if the radio button is marked or not
        cy.get("#fl-return").should('be.visible').should('be.checked')
    })
})