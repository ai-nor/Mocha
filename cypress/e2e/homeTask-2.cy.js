///<reference types="cypress"/>

const pageUrl = 'https://sanitarskyi-ngx-admin.herokuapp.com';


function fillTheField(attr, data) {
  cy.get(attr).type(data);
}


describe('Fill the form', () => {

  beforeEach('Open page with form', () => {
    cy.visit(`${pageUrl}`);

    cy.get(':nth-child(3) > nb-card-body > .theme-preview').click();

    cy.get ('[title="Forms"]').click();

    cy.get('[href="/pages/forms/layouts"]').click();
  })

const name = ['Svitlana', 123 , '@#$5?//','1234567890123456789012345678901234567890123456789012345678901234567890',' '];
const email = ['kolobok@ukr.net', 'ko@' , 'ko', 123, '1234567890123456789012345678901234567890123456789012345678901234567890',' '];

for (let i=0; i<name.length; i++) {
  it (`Fill the form with name: ${name[i]} and email:${email[i]}`, () => {
  fillTheField('[placeholder="Jane Doe"]', name[i]);
  fillTheField('.form-inline > [placeholder="Email"]', email[i]);
})
}
})
