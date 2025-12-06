class LoginPage {
    selectorsList() {

        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: '.oxd-button',
             wrongCredentialAlert: '.oxd-alert',

        }

    }

    accessLoginPage () {
         cy.visit('/auth/login')

    }

    loginWithUser (username, password) {
        cy.get(selectorsList.usernameField).type('Admin')
        cy.get(selectorsList.passwordField).type('admin123')
        cy.get(selectorsList.loginButton).click()
    }
}

export default LoginPage
