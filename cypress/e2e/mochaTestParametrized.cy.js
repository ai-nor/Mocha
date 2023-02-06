///<reference types="cypress"/>

describe('Parametrized tests', () => {

describe('First option', () => {

const paramTest = ({testData, expectedResult}) =>
      function () {
        cy.visit('https://google.com/')
        cy.get('input.gLFyf').type(`${testData} qweqwe`);
        cy.get('input.gLFyf').should("contain.value", `${expectedResult} qweqwe`)
      }

it(`search data`, paramTest({testData: 1, expectedResult: 1}))
it('search data', paramTest({testData: 2, expectedResult: 2}))
it('search data', paramTest({testData: 3, expectedResult: 3}))
it('search data', paramTest({testData: 'Cypress', expectedResult: 'Cypress'}))
    
})

//----------
describe('Second option', () => {
  const data = [
    {testData: 1, expectedResult: 1},
    {testData: 2, expectedResult: 2},
    {testData: 3, expectedResult: 3},
    {testData: 'Cypress', expectedResult: 'Cypress'}
  ]
  
  
  data.forEach(({testData, expectedResult}) => {
    it(`search data ${testData}`, () => {
      cy.visit('https://google.com/')
      cy.get('input.gLFyf').type(`${testData} qweqwe`);
      cy.get('input.gLFyf').should("contain.value", `${expectedResult} qweqwe`)
    })
  })
})
})
