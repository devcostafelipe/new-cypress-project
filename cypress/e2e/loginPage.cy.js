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
        
       

  })
  
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})