 describe('Login Test with Cypress',()=>{
    it('Login with valid credentials',()=>{
        cy.visit('https://ineuron-courses.vercel.app/login');
        //cy.visit('https://ineuron-courses.vercel.app');
        cy.xpath("//div[@class='navbar-menu-links']//following::button").should('be.enabled').click();
        cy.xpath("//input[@name='email1']").type('ineuron@ineuron.ai');
        cy.xpath("//input[@name='password1']").type('ineuron',{timeout:10000});
        cy.xpath("//button[@type='submit']").click();
        cy.title().should("eq",'iNeuron Courses');
        cy.xpath("//h4[@class='welcomeMessage']",{timeout:10000}).should('be.visible')
        cy.xpath("//button[text()='Sign out']").click();
    })
 })