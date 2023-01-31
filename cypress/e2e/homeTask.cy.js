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

// const name = ['Svitlana', 123 , '@#$5?//','1234567890123456789012345678901234567890123456789012345678901234567890',' '];
// const email = ['kolobok@ukr.net', 'ko@' , 'ko', 123, '1234567890123456789012345678901234567890123456789012345678901234567890',' '];

//     for (let a=0; a<name.lenght; a++) {

//       it(`Fill the form with name: ${name} and email:${email}`, () => {
      
//       fillTheField('[placeholder="Jane Doe"]', name[a]);
//       fillTheField('.form-inline > [placeholder="Email"]', email[a]);
//   })
//}

const testData = [
  {name:'Svitlana' , email:'kolobok@ukr.net' },
  {name:123 , email:'kolobok@' },
  {name:'@#$5?//' , email:'ko' },
  {name:'1234567890123456789012345678901234567890123456789012345678901234567890' , email:123 },
  {name:' ' , email:'1234567890123456789012345678901234567890123456789012345678901234567890' }
]

for (let i=0; i<testData.length; i++) {
  it (`Fill the form with name: ${testData[i].name} and email:${testData[i].email}`, () => {
  fillTheField('[placeholder="Jane Doe"]', testData[i].name);
  fillTheField('.form-inline > [placeholder="Email"]', testData[i].email);
})
}
})
