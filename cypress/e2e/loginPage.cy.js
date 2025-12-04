import userData from '/users/felipeaugusto/Documents/Desenvolvedor/Projeto Cypress/node_modules/cypress/package.json'


describe('Orange HRM Tests', () => {
 
 const selectorsList = {

  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: '.oxd-button',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: '.oxd-alert',
 }

  it('Login Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)

  })
  
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})