describe('Using after method', () => {
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

  after(() => {
    cy.log('Test suite finished')
  })
})

describe('Using after method', () => {
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

  afterEach(() => {
    cy.log('Test case finished')
  })
})

