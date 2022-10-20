describe('Test suite Orange HRM ', () => {
    it('Login test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath("//input[@name='username']").type('Admin');
        cy.xpath("//input[@name='password']").type('admin123');
        cy.title().should('equal','OrangeHRM')
        cy.url().should('contain','demo.orangehrmlive')
        cy.xpath("//button[@type='submit']").click();


    })

    it('Click on PIM',()=>{
        cy.xpath("(//*[name()='svg'])[3]").click();
        cy.xpath("(//div[normalize-space()='David'])[position()=2]//preceding::input[1]").click();
        cy.xpath("//div[text()='Fiona ']//following::div[11]//button[2]").click();
        cy.xpath("//label[text()='Nickname']").type('Fiona');
        cy.xpath("//p[text()=' * Required']//following::button[1]").click();
        cy.xpath("//p[text()='Successfully Updated']").should('be.visible')
        cy.url().should('contain','pim/viewEmployeeList');
    })

    it.skip('Add Employee',()=>{
        cy.url().should('contain','addEmployee')
        cy.xpath("//nav[@role='navigation']//following::ul[3]//li[3]//a").click();
        cy.xpath("//label[text()='Employee Full Name']//following::input[1]").type('test@1');
        cy.xpath("//button[text()=' Save ']").click();
    })
});