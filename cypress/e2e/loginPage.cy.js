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
  closeDateButton: '.--close',
  genericField2: '.oxd-select-text-input',
  submitButton: '.orangehrm-left-space'
  
  
 }

  it.only('Login Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
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
    cy.get(selectorsList.genericField2).eq(0).type('Brazilian').click()
    cy.get(selectorsList.genericField2).eq(1).type('Single').click()
    //cy.get(selectorsList.genericField).eq(8).click().type(' 2025-03-03' )
    //cy.get(selectorsList.closeDateButton).click()
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