describe('Handle Google Search',()=>{
    it('Select values from google search',()=>{
        cy.visit("https://www.google.com/");
        cy.get("[name='q']").type('testing',{delay:300});
        cy.selectValueFromList("//div[@role='option']//div[1]//span",'course');
    })
})