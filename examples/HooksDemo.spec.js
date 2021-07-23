/// <reference types="Cypress" />

describe('Hooks', function() {
    before(() => {
        cy.log('************** This is SETUP block **********')
        // runs once before all tests in the block
    })
    beforeEach(function() {
        cy.log('************** This is LOGIN block **********')
        // runs before each test in the block
    })
    afterEach(() => {
        cy.log('************** This is LOGOUT block **********')
        // runs after each test in the block
    })
    
    after(function() {
        cy.log('************** This is TERMINAL block **********')
        // runs once after all tests in the block
    })
    it('Searching', function() {
        cy.log('************** Searching test **********')
    })
    it('Advanced', function() {
        cy.log('************** Advanced test **********')
    })
    it('Listing products', function() {
        cy.log('************** Listing products test **********')
    })
})