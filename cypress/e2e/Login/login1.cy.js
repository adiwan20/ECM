import LoginPageD from "../../Pages/LoginPage/loginDetails";
const loginPageValidation = new LoginPageD();

describe("login scenario1",() => {
    beforeEach(() => {
        cy.visit("https://pmsdevui.azurewebsites.net/");
     
        cy.fixture("Login/login.json").as(
          "loginPageValidations"
        );
        cy.fixture("credentials.json").as("credentials");

    });
   
    it("Verify successful login", function() {
        // Access the alias using this.credentials
        const credentials = this.credentials;
        loginPageValidation.verifyLogin(credentials.username, credentials.accesskey);
      });
      
    })


  