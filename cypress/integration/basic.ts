/// <reference types = "cypress" />

it('assertion demo', function(){
    cy.log('Start')
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be.enabled')
    
    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn')

    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class', 'query-btn')

        expect(true).to.be.true
        
        let name = 'cypress'
        expect(name).to.be.equal('cypress')

        assert.equal(4, 4, "Not Equal")
        assert.strictEqual(4, 4, "Not Strictly Equal")
})