describe('Smoke Test',()=>{
     it('verfify title',()=>{
        cy.visit('https://ineuron-courses.vercel.app');
        cy.title().should('contain','Courses');
     })

     it('verify exact title',()=>{
        cy.visit('https://ineuron-courses.vercel.app');
        cy.title().should('equal','iNeuron Courses');

     })

     it('Verfify partial url',()=>{
        cy.visit('https://ineuron-courses.vercel.app');
        cy.url().should('contain','ineuron');   
     })
})