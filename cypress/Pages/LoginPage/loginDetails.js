class LoginDetails{
    email='input[name="email"]'
    key='input[name="key"]'
    loginButton='button[type="submit"]'

    verifyLogin(username,password){
            cy.get(this.email).type(username)
             cy.get(this.key).type(password)
           cy.get(this.loginButton).click();
         return this;
    }
}export default LoginDetails;