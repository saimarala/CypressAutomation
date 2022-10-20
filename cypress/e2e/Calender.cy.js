describe('Calender Automate',function(){
    this.beforeEach(function(){
        cy.fixture("cypressdata.json").then(function(testData){
            this.testData=testData;
        })
    })
    it('Calender Validation',function(){
        cy.visit('https://ineuron-courses.vercel.app/login');
        cy.viewport(1920,1080);
        cy.login(this.testData.username,this.testData.password)
        cy.contains("Manage").realHover();
        cy.wait(3000);
        cy.contains("Manage Courses").click();
        cy.contains("Add New Course ").click({force:true});
        cy.get("[name='startDate']").click();
        cy.xpath("//div[@class='react-datepicker__current-month']").then(function(ele){
            cy.log(ele.text())
           // var act;
        })
        

    })
})