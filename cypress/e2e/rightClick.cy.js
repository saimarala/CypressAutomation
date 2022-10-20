describe('Handle right click',()=>{
    it('Right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        cy.contains('right click me').rightclick()
        cy.xpath("//span[text()='Copy']").click();

        cy.on('window:alert',function(msg){
            expect(msg).eql('clicked: copy')
        })

    })
})