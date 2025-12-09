import userData from '../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()



describe('Orange HRM Tests', () => {
 
 const selectorsList = {


  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: '.oxd-alert',
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: '.orangehrm-firstname',
  middleNameField: '.orangehrm-middlename',
  lastNameField: '.orangehrm-lastname',
  genericField: '.oxd-input',
  dateField: "[placeholder='yyyy-dd-mm']",
  genericCombobox: '.oxd-select-text-input',
  secondItemCombobox:'.oxd-select-dropdown > :nth-child(5)',
  thirdItemCombobox: '.oxd-select-dropdown > :nth-child(2)',
  closeDateButton: '.--close',
  submitButton: '.orangehrm-left-space'
  
  
 }

      it.only('Login Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorsList.dashboardGrid)
        cy.get(selectorsList.myInfoButton).click()
        cy.get(selectorsList.firstNameField).clear().type('Felipe')
        cy.get(selectorsList.middleNameField).clear().type('Augusto')
        cy.get(selectorsList.lastNameField).clear().type('Costa')
        cy.get(selectorsList.genericField).eq(4).clear().type('yeeIdTest')
        cy.get(selectorsList.genericField).eq(5).clear().type('other Id Number')
        cy.get(selectorsList.genericField).eq(6).clear().type('Driver License Number')
        cy.get(selectorsList.genericField).eq(7).clear().type('2025-09-09')
        cy.get(selectorsList.closeDateButton).click()
        cy.get(selectorsList.genericCombobox).eq(0).click({force: true})
        cy.get(selectorsList.secondItemCombobox).click()
        cy.get(selectorsList.genericCombobox).eq(1).click({force: true})
        cy.get(selectorsList.thirdItemCombobox).click()
        //cy.get(selectorsList.genericField).eq(8).type("09-09-2025").click({force: true})
        //cy.get(selectorsList.closeDateButton).click({force: true})
        cy.get(selectorsList.submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')

  })
  
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})