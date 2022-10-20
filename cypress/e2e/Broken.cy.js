describe('First API call',()=>{
    it('Get request via Cypress',()=>{
        cy.request('https://ineuron-courses.vercel.app/login')
        cy.get("a").each(link=>{
            cy.request({
                url:link.prop("href"),
                failOnStatusCode:false
            }).then(function(resp){
                cy.log(resp.status)
            })
        })
    })
    
    

})



