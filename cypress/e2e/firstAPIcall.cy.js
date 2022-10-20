describe('First API call',()=>{
    it('Get request via Cypress',()=>{
     cy.request('https://ineuron-courses.vercel.app/login').then(function(resp){
    cy.log(resp.status)
    cy.log(resp.duration)
    cy.log(resp.body)
    cy.log(resp.statusText)
     })

    })
})