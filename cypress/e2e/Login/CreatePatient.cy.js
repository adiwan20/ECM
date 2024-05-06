describe("login scenario1",() => {
    beforeEach(() => {
        cy.fixture('credentials.json').then((data) => {
            cy.wrap(data).as('credentialData');
        });
    });
        it("Verify successful login", () =>{
    cy.get('@credentialData').then((credentialData) =>{
        cy.visit("https://pmsdevui.azurewebsites.net/")

        cy.get('input[name="email"]').type(credentialData.username)   //login
        cy.get('input[name="key"]').type(credentialData.accesskey)
        cy.get('button[type="submit"]').click();
        cy.get('select[id="account"]').should("be.visible").select("GM", { force: true });  //select account
        cy.get('.modal-footer > .btn-common').click();
        cy.get(':nth-child(2) > .mb-1 > :nth-child(1) > #dashboard-tab > .primary-menu').click();
        cy.get('#Demographics-collapse > :nth-child(2) > #dashboard-tab > span').click();
        
        //create patient
        cy.get('input[id="firstName"]').type(credentialData.firstname)
        cy.get('input[id="lastName"]').type(credentialData.lastname)
        cy.get('input[formcontrolname="dob"]').type(credentialData.dob)
        cy.get('select[id="patient-gender"]').should("be.visible").select("Male", {force:true});
        cy.get('button[type="submit"]').click();

    })
   
    })
      
    })