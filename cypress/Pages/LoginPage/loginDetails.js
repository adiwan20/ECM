class LoginDetails{
    email='input[name="email"]'
    key='input[name="key"]'
    loginButton='button[type="submit"]'

    verifyLogin(username,password){
    
            cy.get(this.email).should("be.visible").type(username,{force:true})
             cy.get(this.key).should("be.visible").type(password,{force:true})
           cy.get(this.loginButton).click({force:true});
         return this;
    }
}export default LoginDetails;