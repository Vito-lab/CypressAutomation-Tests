/// <reference types="cypress" />

describe ('Test for BS2', function () {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('#cookieConsent')
        const disableSmoothScroll = () => {
            cy.document().then((document) => {
                const node = document.createElement("style");
                node.innerHTML = "html { scroll-behavior: unset !important; }";
                document.body.appendChild(node);
            });
        };
        cy.visit("https://www.bs2.lt/")
        cy.get('#cookieConsentOK').click()
        cy.get('.level0 > li:nth-child(8) > a:nth-child(1)', {timeout: 30000}).click()
        disableSmoothScroll();        
    })

    it ('Positive email test "Senior Back-end Engineer"', function () {

        cy.get('.news > div:nth-child(2) > p:nth-child(3) > strong:nth-child(1) > a:nth-child(1)', {timeout: 30000})
        .invoke('removeAttr', 'target').click();
        cy.get('.news > div:nth-child(2)').children().contains('E-mail – ')
    })

    it ('Positive email test "Senior Front-end Engineer"', function () {

        cy.get('.news > div:nth-child(2) > p:nth-child(4) > strong:nth-child(1) > a:nth-child(1)', {timeout: 30000})
        .invoke('removeAttr', 'target').click();
        cy.get('.WordSection1').children().contains('E-mail – ')
    })

    it ('Positive email test "Testuotojas (-A)"', function () {

        cy.get('.news > div:nth-child(2) > p:nth-child(5) > a:nth-child(1)', {timeout: 30000})
        .invoke('removeAttr', 'target').click();
        cy.get('.news > div:nth-child(2)').children().contains('E-mail – ')
    })

    afterEach(() => {
        cy.wait(20000)
        cy.get('#popup-close', {timeout: 60000}).click()
    })
})