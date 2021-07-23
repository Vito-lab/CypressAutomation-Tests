/// <reference types="cypress" />

// sometimes cypress cannot execute methods because element is detached from DOM. In this case need to restart test
describe ("Categories test", function() {
    it ("Delete cart", function () {
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get("a.list-group-item:nth-child(2)").click()
        cy.get("#tbodyid > :nth-child(1)").contains('$360')
        cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch").click({force: true})
        cy.get(".col-sm-12 > .btn", {timeout: 30000}).click()
        cy.go(-2)
        cy.get("a.list-group-item:nth-child(3)", {timeout: 30000}).click().click()
        cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch", {timeout: 30000}).contains('Sony vaio i5').click({force: true})
        cy.get(".col-sm-12 > .btn", {timeout: 30000}).click()
        cy.go(-2)
        cy.get("a.list-group-item:nth-child(4)", {timeout: 30000}).click().click()
        cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch", {timeout: 30000}).click({force: true})
        cy.get(".col-sm-12 > .btn").click()
        cy.get("#cartur").click()
        cy.get("#tbodyid > :nth-child(1) > :nth-child(4) > a", {timeout: 30000}).click({multiple: true}, {force:true})
        cy.get("#tbodyid > :nth-child(1) > :nth-child(4) > a", {timeout: 30000}).click({multiple: true}, {force:true})
        cy.get(".success > :nth-child(4) > a", {timeout: 30000}).click({multiple: true}, {force:true})
        cy.get(".col-lg-1 > .btn").click({force: true})
        cy.get("#totalm").contains('Total:')
        cy.get("#name").type("Test")
    })
}) 