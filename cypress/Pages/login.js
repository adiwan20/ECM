class login{
    email='input[name="email"]'
    key='input[name="key"]'
    loginButton='button[type="submit"]'

  //  verifyLogin(username,password){
  //      cy.get(this.email).type(username)
   //      cy.get(this.key).type(password)
  //      cy.get(this.loginButton).click();
  //  return this;
  //  }
  
  launchURL() {
    cy.visit(Cypress.env("baseUrl"));
    return this;
  }
  enterEmail(email) {
    cy.log("Entering Username : " + email);
    cy.get(this.email).type(email);
    return this;
  }
  enterPassword(password) {
    cy.log("Entering password");
    cy.get(this.key).type(password);
    return this;
  }
  clickLoginButton() {
    cy.log("Clicking continue button ...");
    cy.get(this.loginButton).click();
    return this;
  }


}export default login;