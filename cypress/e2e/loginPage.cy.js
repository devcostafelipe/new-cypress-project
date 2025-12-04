import userData from '../fixtures/userData.json'


describe('Orange HRM Tests', () => {
 
 const selectorsList = {

  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: '.oxd-button',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: '.oxd-alert',
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: '.orangehrm-firstname',
  middleNameField: '.orangehrm-middlename',
  lastNameField: '.orangehrm-lastname',
  genericField: '.oxd-input',
  dateField: "[placeholder='yyyy-dd-mm']",
  closeDateButton: '.--close'
  
  
 }

  it.only('Login Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).type('Felipe')
    cy.get(selectorsList.middleNameField).type('Augusto')
    cy.get(selectorsList.lastNameField).type('Costa')
    cy.get(selectorsList.genericField).eq(4).type('Employee Id Test')
    cy.get(selectorsList.genericField).eq(5).type('other Id Number')
    cy.get(selectorsList.genericField).eq(6).type('Driver License Number')
    cy.get(selectorsList.dateField).eq(1).type('2025-09-09').type(selectorsList.closeDateButton)

  })
  
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})