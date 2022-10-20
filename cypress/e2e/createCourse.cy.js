describe('Create course and delete course',function(){
    beforeEach(function(){
        cy.fixture("cypressdata.json").then(function(jsondata){
            this.jsondata=jsondata;
        })
    })
    it('login',function(){
        cy.visit('https://ineuron-courses.vercel.app/login');
        cy.viewport(1920,1080);
        cy.login(this.jsondata.username,this.jsondata.password)
        cy.contains("Manage").realHover();
        cy.wait(3000);
        cy.contains("Manage Courses").click();
        cy.contains("Add New Course ").click({force:true});
        cy.get("#thumbnail").attachFile("cypress.jpg");
        cy.xpath("//table[contains(@class,'courses-table')]//tr").should('have.length',12);
        //************* */
        // let func=(locator)=>{
        //     cy.xpath(locator).then((ele)=>{
        //         let  c=ele.length
        //         cy.xpath(locator).should('have.length',c);
        //     })

        // }
        // func("//table[contains(@class,'courses-table')]//tr");       
        /************** */
        cy.get("#instructorNameId").type(this.jsondata.Category,{delay:900});

        cy.selectValueFromList("//div[@class='intructorsList']//p",this.jsondata.CategoryList)
        
        cy.get("#price").clear().type("4000")
        //cy.get("#price").type("5000");
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
        cy.xpath("//table[contains(@class,'courses-table')]//tr").should('have.length',13);

        cy.xpath("//table[contains(@class,'table-borderless')]//td[text()='SAI Cypress Automation']//preceding::input[1]").click();
        cy.xpath("//table[contains(@class,'table-borderless')]//td[text()='SAI Cypress Automation']//following::button[1]").click();
        cy.xpath("//table[contains(@class,'courses-table')]//tr").should('have.length',12);
        //cy.contains("Next Month").wrap
    })

})

