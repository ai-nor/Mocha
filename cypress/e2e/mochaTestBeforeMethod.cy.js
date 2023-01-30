
describe('Using before method', () => {
  before(()=> {
    cy.visit('https://google.com/');
  })
  
  it('Test1', () => {
    cy.get('input.gLFyf').type('Cypress');
  })

  // it.skip('Test1', () => {  // пропускає тест
  //   cy.get('input.gLFyf').type('Cypress');
  // })
  
  // it.щтдн('Test1', () => {  // запускає тільки цей тест
  //   cy.get('input.gLFyf').type('Cypress');
  // })

  it('Test2', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');})
  
  it('Test3', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');})
  
  it('Test4', () => {
    cy.visit('https://google.com/');
    cy.get('input.gLFyf').type('Cypress');
  })
})

describe('Using before each method', () => {
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

