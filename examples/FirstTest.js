describe('TestPilot1', () => {
    it('Verify Title Of The Page Positive', () => {
      cy.visit('www.google.lt')
      cy.title().should('eq', 'Google')
    })
    it('Verify Title Of The Page Negative', () => {
      cy.visit('www.google.lt')
      cy.title().should('eq', 'GOOGLE')
    })
  })