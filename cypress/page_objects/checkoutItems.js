class CheckoutItems {

    //this button will be used insted of checkout, continue and finish buttons
    get actionBtn() {
        return cy.get('.btn_action')
    }
    
    get firstNameInput() {
        return cy.get('#first-name')
    }
    
    get lastNameInput() {
        return cy.get('#last-name')
    }
    
    get postalCodeInput() {
        return cy.get('#postal-code')
    }

    get title() {
        return cy.get('.title')
    }

    checkout(firstName,lastName,postalCode) {
    this.actionBtn.click();
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.postalCodeInput.type(postalCode);
    this.actionBtn.click();
    this.actionBtn.click();
    this.title.should('have.text', 'Checkout: Complete!')
    }

}

export const checkoutItems = new CheckoutItems();