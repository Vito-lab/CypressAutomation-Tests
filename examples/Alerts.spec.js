/// <reference types="Cypress" />

describe('GUI Elements', function() {
    it('Alerts alert', function() {
        cy.visit("https://mail.rediff.com/cgi-bin/login.cgi")
        cy.get("input[type=submit]").click()
        cy.on('window:alert',(str) => { // event - what will happen
            expect(str).to.equal('Please enter a valid user name')
        })
    })
    it('Alerts confirm', function() {
        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get("#HTML9 > div.widget-content > button").click()
        cy.on('window:confirm',(str) => {
            expect(str).to.equal('Press a button!')
        })
    })
})