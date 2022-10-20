describe('elemnet count', () => {
    it('count',()=>{
        cy.visit("https://www.amazon.in/")
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        .and('include','Online Shopping');
        // cy.xpath("//a").then((ele)=>{
        //     let count=ele.length;
        //     cy.log('web element count : '+count);
        // })
        //cy.itemcount("//a")
        cy.itemcount("//a");
        
    })
});