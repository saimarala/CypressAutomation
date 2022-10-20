describe('Keyboard events demp',()=>{
    it('keyboard events',()=>{
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("a").debug();
        cy.get("#email1").type('ineuron@ineuron.ai');
        //cy.pause();
        cy.get("#password1").type('ineuron{enter}');

    })
})