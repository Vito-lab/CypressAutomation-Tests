/// <reference types="Cypress" />

describe('Locating Elements',function() {
    it('Verify types of locators',function() {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
        cy.get("[type='submit']").click() // click on Search Button
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()
        cy.get("#product_enteredQuantity_4").clear().type('4') // we get the field of quantity, clear it and fill it with new value
        cy.wait(3000)
        cy.get("#add-to-cart-button-4").click() // clicking add to card button after changing quantity
        cy.wait(5000)
        cy.get("#topcartlink > a > span.cart-label").click() // shopping cart click
        cy.wait(3000)
        cy.get(".product-unit-price").contains("$1,800.00") // validation point

    })
})