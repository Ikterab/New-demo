
// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit(' http://localhost:5173/');
//     cy.get('[data-testid="cypress-title"]').should("exist")
//   })
// })

describe("Register page Tests", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });
  it("Page should load", () => {
    cy.get('[data-testid="cypress-title"]').should("exist")
    cy.contains("Register").should("exist")
  })
  it("Should show validation errors when fields arte empty", () => {
    cy.get('[data-testid="btn-submit"]').click();
    cy.contains("Please enter your name!").should("exist");
    cy.contains("Please enter your email!").should("exist");
    cy.contains('Please enter your phonenumber!').should('exist');
    cy.contains("Please enter password!").should("exist");
    cy.contains("Please confirm your password!").should("exist")
  })
  it("Should get error when pasword do no match", () => {
    cy.get('[data-testid="input-name"]').type("Tonmoy");
    cy.get('[data-testid="input-email"]').type("test@gmail.com");
    cy.get('[data-testid="input-phonenumber"]').type('01328665614')
    cy.get('[data-testid="input-password"]').type('123456');
    cy.get('[ data-testid="input-confirmpassword"]').type('12345');
    

    cy.get('[data-testid="btn-submit"]').click();
    cy.contains("Passwords do not match!").should("exist")


  })
  it("Should register successfully", () => {
    cy.get('[data-testid="input-name"]').type("Tonmoy");
    cy.get('[data-testid="input-email"]').type('uniquetest@gmail.com')
    cy.get('[data-testid="input-phonenumber"]').type('01328665614')
    cy.get('[data-testid="input-password"]').type('123456')
    cy.get('[data-testid="input-confirmpassword"]').type('123456')

    cy.get('[data-testid="btn-submit"]').click()
    cy.wait(3500);
    // cy.contains('Registration Successful 🎉').should("exist");


  })
})