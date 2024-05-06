import LoginPageD from "../../Pages/LoginPage/loginDetails";
const loginPageValidation = new LoginPageD();

describe("login scenario1",() => {
    beforeEach(() => {
        
       // cy.fixture('credentials.json').then((data) => {
        //    cy.wrap(data).as('credentialsData');
        //});
        //cy.fixture("credentials.json").as("credentialsData");

        cy.visit("https://pmsdevui.azurewebsites.net/")
       // cy.fixture("Login/login.json").as('loginData')
let loginData;
        cy.fixture("Login/login.json").then((data)=>{
            this.loginData=data;
        })

    });
        it("Verify successful login", () =>{
   // cy.get('@credentialsData').then((credentialsData) =>{
       // loginPageValidation.verifyLogin(this.loginData.username,this.loginData.accesskey);
        //loginPageValidation.verifyLogin( "adiwan@health.saisystems.com","Abc@12345");
       cy.loginToApp(this.loginData.username,this.loginData.accesskey)

   // })
    })
      
    })