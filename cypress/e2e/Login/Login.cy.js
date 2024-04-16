describe("login scenario1",() => {

    it("Verify successful login", () =>{
    
    cy.visit("https://pmsdevui.azurewebsites.net/")
    cy.get('input[name="email"]').type('adiwan@health.saisystems.com')
    cy.get('input[name="key"]').type('Abcde@12345')
    cy.get('button[type="submit"]').click();
    })
      
    })