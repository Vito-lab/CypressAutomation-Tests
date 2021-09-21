/// <reference types="cypress" />

describe ('Demo Page test', function () {

    beforeEach(() => {
        cy.visit('https://demo.getkevin.eu/', {timeout: 30000})
        cy.get('#root > main > div.sc-gKAblj.boPkKw > a:nth-child(1)').click()
        cy.get('#amount').type('0.01')
        cy.get('#email').type('vitoldas.vitkovskis@gmail.com')
        cy.get('#root > div > main > form > div.sc-dlMBXb.hAfEGY > label:nth-child(1) > div').click()
    })



    it ('TC_01 - Payment in Demo Page without Therms and Conditions', function () {

        cy.get('#root > div > main > form > div.sc-iBzFoy.gwofgg > div.sc-crzoUp.cMnhPQ > button').click()
        cy.get('span').contains('You have to agree to the terms and conditions and privacy policy')
    })

    it ('TC_02 - Payment in Demo Page with Therms and Conditions', function () {

        cy.get('#root > div > main > form > div.sc-iBzFoy.gwofgg > div.sc-fnVYJo.aqTZb > label > span').click()
        cy.get('#root > div > main > form > div.sc-iBzFoy.gwofgg > div.sc-crzoUp.cMnhPQ > button').click()
        cy.url().should('include', 'https://login.swedbank.lt/auth', {timeout: 10000})
    })
})