// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectValueFromList',(locator,textToSearch)=>{
    cy.xpath(locator).each((ele)=>{
        cy.log(ele.text());
        if(ele.text().includes(textToSearch)){
            cy.wrap(ele).click({force:true});
        }

    })
})

Cypress.Commands.add('login',(username,password)=>{
    cy.xpath("//input[@name='email1']").type(username).should('have.value',username);
        cy.xpath("//input[@name='password1']").type(password,{timeout:10000}).should('have.value',password);
        cy.xpath("//button[@type='submit']").should('be.enabled').click();
})

Cypress.Commands.add('itemcount',(locator)=>{
    cy.xpath(locator).then((ele)=>{
        var count=ele.length;
            cy.log('web element count : '+count);

    })
    
})

Cypress.Commands.add('switchToFrame',function(frameIDorNameorLocator){
    return cy.get(frameIDorNameorLocator)
    .its("0.contentDocument").its("body").then(cy.wrap)
    
})