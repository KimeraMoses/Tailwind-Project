describe("Tests for signing up a patient", () => {
  beforeEach(() => {
    cy.visit("/patient/account/signup");
  });

  it("Handles errors properly when no fields filled out ", () => {
    cy.contains("Patient Registration").should("exist");
    //no fields filled out
    cy.get(`button:contains("Register")`).should("be.disabled");
  });

  it("It should allow form submition when only last name and first name are empty", () => {
    cy.contains("Patient Registration").should("exist");
    //first name and last name are not required
    cy.get(`input[type="email"]`).clear().type("test79@mailinator.com");
    cy.get(`input[type="password"]`).clear().type("Apples_12345");
    cy.get(`input[name="termsAndConditions"]`).check();
    cy.get(`button:contains("Register")`).should("not.be.disabled");
  });

  it("It should handle errors properly when invalid email is filled", () => {
    cy.contains("Patient Registration").should("exist");
    //submit form with invalid email
    cy.get('input[name="firstName"]').clear().type("Jeannie");
    cy.get('input[name="lastName"]').clear().type("Wang");
    cy.get(`input[type="email"]`).clear().type("jeannie");
    cy.get(`input[type="password"]`).clear().type("Apples_12345");
    cy.get(`input[name="termsAndConditions"]`).check();
    cy.get(`button:contains("Register")`).should("be.disabled");
  });

  it("It should handle errors properly when invalid password is filled", () => {
    cy.contains("Patient Registration").should("exist");
    //submit form with invalid password
    cy.get('input[name="firstName"]').clear().type("Jeannie");
    cy.get('input[name="lastName"]').clear().type("Wang");
    cy.get(`input[type="email"]`).clear().type("test@medatlas.com");
    cy.get(`input[type="password"]`).clear().type("123");
    cy.get(`input[name="termsAndConditions"]`).check();
    cy.get(`button:contains("Register")`).should("be.disabled");
  });

  it("It should submit form when all fields are filled out properly", () => {
    cy.contains("Patient Registration").should("exist");
    cy.get('input[name="firstName"]').clear().type("Jeannie");
    cy.get('input[name="lastName"]').clear().type("Wang");
    cy.get(`input[type="email"]`).clear().type("test@medatlas.com");
    cy.get(`input[type="password"]`).clear().type("Wang_123456");
    cy.get(`input[name="termsAndConditions"]`).check();
    cy.get(`button:contains("Register")`).click();
    cy.url().should("include", "/confirm-signup");
    cy.contains("Almost done").should("exist");
  });
});
