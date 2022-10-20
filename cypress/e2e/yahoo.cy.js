describe('Yahoo scenario',()=>{
    it('yahoo check box',()=>{
        cy.visit('https://login.yahoo.com/');
        cy.xpath("//input[@value='Next']//following::input[1]").click();
    })
})