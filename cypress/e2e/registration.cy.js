describe('Resistration',()=>{
    it('Registration',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.viewport(1920,1080);
        cy.contains("New user? Signup").click();
        cy.contains("Sign up").should("be.disabled");
        cy.get("input[name='name']").type("Cypress");
        cy.get("input[name='email']").type("Cypress3@gmail.com");
        cy.get("input[name='password']").type("Cypress");
        cy.xpath("//label[text()='Testing']//preceding::input[1]").click();
        cy.xpath("//input[@type='radio']").first().click();
        cy.get("select[name='state']").select("Andhra Pradesh");
        cy.contains("Sign up").should('be.enabled').click();

        cy.xpath("//input[@name='email1']").type('Cypress3@gmail.com').should('have.value','Cypress3@gmail.com')
        cy.xpath("//input[@name='password1']").type('Cypress',{timeout:10000});
        cy.xpath("//button[@type='submit']").click();
        cy.title().should("eq",'iNeuron Courses');
    })
})