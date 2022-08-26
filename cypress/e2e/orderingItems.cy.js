/// <reference types="Cypress" />
import {loginPage} from '../page_objects/loginPage'
import {manageItems} from '../page_objects/manageItems'
import {checkoutItems} from '../page_objects/checkoutItems'


describe ('creating and completing new order', () => {

    before('login', () => {
        cy.visit('/')
        loginPage.login(
            Cypress.env('USERNAME'),
            Cypress.env('PASSWORD')
        )

        cy.url().should('contain', '/inventory.html')
    })
    
    it('ordering items', () => {
        manageItems.items();
        checkoutItems.checkout(
            Cypress.env('FIRST_NAME'),
            Cypress.env('LAST_NAME'),
            Cypress.env('POSTAL_CODE'),
        )
    })

})