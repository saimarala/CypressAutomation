describe('Handle frames',()=>{
    it('Handle Frame without plugin',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get("iframe").its("0.contentDocument").its("body").then(cy.wrap)
        .clear()
        .type("Cypress");
    })

    // it.only('Handle Frame without plugin',()=>{
    //     cy.visit("https://the-internet.herokuapp.com/iframe")
    //    cy.switchToFrame("iframe").clear()
    //    .type('Cypress')
    // })

    it('Handle Frame plugin',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
      //cy.frameLoaded
    })
})