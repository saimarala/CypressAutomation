describe('myntra',()=>{
 it('shopping',()=>{
    cy.visit("https://www.myntra.com/");
    cy.viewport(1920,1080);
    cy.xpath("(//a[text()='Women'])[1]").realHover();
    cy.wait(3000)
    cy.xpath("((//a[text()='Men'])[1]//following::li//a[text()='Footwear']//following::li//a[text()='Casual Shoes'])[1]").click();
    cy.url().should('contain','men-casual-shoes');
 })
})