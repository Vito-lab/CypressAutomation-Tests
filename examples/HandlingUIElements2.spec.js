describe('UI Elements Part2', function() {
    it('Check boxes', function () {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.get("#checkbox1").check().should('be.checked').and('have.value', 'Cricket') // marking the check box, then checking if it is marked, then check if the check box has value Cricket
        cy.get("#checkbox2").check().should('be.checked').and('have.value', 'Movies')
        cy.get("#checkbox3").check().should('be.checked').and('have.value', 'Hockey')

        cy.get("#checkbox1").uncheck().should('not.be.checked') // same as 1st column but uncheck
        cy.get("#checkbox2").uncheck().should('not.be.checked')
        cy.get("#checkbox3").uncheck().should('not.be.checked')

        // easier method: all 3 checkbox marked with 1 code line
        cy.get("input[type=checkbox]").check(['Cricket', 'Movies', 'Hockey'])
        
    })

    it('Drop Downs', function () {
        cy.get("#Skills").select('Android').should('have.value', 'Android')
    })

    it('Multi-Select', function () {
        cy.get("#msdd").click()
        cy.get(".ui-corner-all").contains('English').click()
        cy.get(".ui-corner-all").contains('German').click()
        cy.get("[role=combobox]").click({force: true}) // Previous list is not closed yet so we force click on new list
        cy.get(".select2-search__field").type('Ind')
        cy.get(".select2-search__field").type('{enter}') // type Enter KEY with {}

    })

})