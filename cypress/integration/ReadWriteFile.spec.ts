
describe('Read Write File demo', function(){

beforeEach(function(){
    cy.fixture('example.json').as('data')
})

it('read file using fixture', function(){

    cy.fixture('example.json')
        .its('name').should('eq', 'cypress')
    cy.log(this.data.name)
    cy.log(this.data.email)

})

it('read file using ReadFile cmd', function(){

    cy.readFile('./cypress/fixtures/example.json')
        .its('name').should('eq', 'cypress')
})


it('Write File demo', function(){

    cy.writeFile('sample.txt', 'Hello I am learning Cypress')
    cy.writeFile('sample.txt', '\nThis is interesting', {flag: 'a+'})
})

})