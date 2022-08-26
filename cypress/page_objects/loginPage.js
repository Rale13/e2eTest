class LoginPage {

get loginBtn() {
    return cy.get('#login-button')
}

get userameInput() {
    return cy.get('#user-name')
}

get passwordInput() {
    return cy.get('#password')
}

login(username, password) {
    this.userameInput.type(username)
    this.passwordInput.type(password)
    this.loginBtn.click()
}


}

export const loginPage = new LoginPage();