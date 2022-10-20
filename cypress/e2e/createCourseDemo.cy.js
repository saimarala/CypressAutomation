describe('Create course and delete course',function(){
    beforeEach(function(){
        cy.fixture("cypressdata.json").then(function(jsondata){
            this.jsondata=jsondata;
        })
    })
    it('login',function(){
        cy.visit('https://ineuron-courses.vercel.app/login');
        cy.viewport(1920,1080);
        cy.xpath("//input[@name='email1']").type(this.jsondata.username).should('have.value',this.jsondata.username);
        cy.xpath("//input[@name='password1']").type(this.jsondata.password,{timeout:10000}).should('have.value',this.jsondata.password);
        cy.xpath("//button[@type='submit']").should('be.enabled').click();
        
        cy.contains("Manage").realHover();
        cy.wait(3000);
        cy.contains("Manage Courses").click();
        cy.contains("Add New Course ").click({force:true});
        cy.get("#thumbnail").attachFile("cypress.jpg");
        // let count =cy.xpath("//table[contains(@class,'courses-table')]//tr");
        // cy.log(count)
        cy.xpath("//table[contains(@class,'courses-table')]//tr").should('have.length',18);
        cy.get("#instructorNameId").type('Ra',{delay:900});
        cy.xpath("//div[@class='intructorsList']//p").each((ele)=>{
            cy.log(ele.text());
            if(ele.text().includes('Random')){
                cy.wrap(ele).click({force:true});
            }

        })
        cy.get("#price").clear();
        cy.get("#price").type("5000");
        cy.get("[name='startDate']").click();
        cy.xpath("//div[contains(@class,'react-datepicker__month')]//div[@aria-disabled='false']").each((ele)=>{
            if(ele.text().includes('20')){
                cy.wrap(ele).click({force:true});
            }
        })

        cy.get("[name='endDate']").click();
        cy.xpath("//div[contains(@class,'react-datepicker__month')]//div[@aria-disabled='false']").each((ele)=>{
            if(ele.text().includes('22')){
                cy.wrap(ele).click({force:true});
            }
        })

        cy.xpath("//div[text()='Select Category']").click();
        cy.xpath("//button[text()='Data Science']").click({force:true});
        cy.get("#name").type(this.jsondata.courseName);
        cy.get("#description").type(this.jsondata.courseDescription);
        cy.xpath("//button[text()='Save']").click();
        cy.xpath("//table[contains(@class,'courses-table')]//tr").should('have.length',19);

        cy.xpath("//table[contains(@class,'table-borderless')]//td[text()='Cypress Automation']//preceding::input[1]").click();
        cy.xpath("//table[contains(@class,'table-borderless')]//td[text()='Cypress Automation']//following::button[1]").click();
        cy.xpath("//table[contains(@class,'courses-table')]//tr").should('have.length',18);
        //cy.contains("Next Month").wrap
    })

})