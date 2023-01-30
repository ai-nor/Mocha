describe('Using before method', () => {
  before(()=> {
    cy.visit('https://google.com/');
  })
  
  it.skip('Test1', () => {
    cy.get('input.gLFyf').type('Cypress');
  })
  
  it('Test2', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');})
  
  it.only('Test3', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');})
  
  it('Test4', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');
  })
})

describe('Using before method', () => {
  beforeEach(()=> {
    cy.visit('https://google.com/');
  })
  
  it('Test1', () => {
    cy.get('input.gLFyf').type('Cypress');
  })
  
  it('Test2', () => {
    cy.get('input.gLFyf').type('Cypress');})
  
  it('Test3', () => {
    cy.get('input.gLFyf').type('Cypress');})
  
  it('Test4', () => {
    cy.get('input.gLFyf').type('Cypress');
  })
})

`${data}`