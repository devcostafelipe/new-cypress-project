class MenuPage {

    selectorlist() {

        const selectors = {
            
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']"
            

         }

        return selectors

    }

    accessMyInfo () {
        cy.get(this.selectorlist().myInfoButton).click()
    
    }

    accessPerformance(){

        cy.get(this.selectorlist().performanceButton).click()


    }


    
}

export default MenuPage