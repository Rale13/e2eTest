class ManageItems {

get addBackpack() {
    return cy.get('#add-to-cart-sauce-labs-backpack')
}

get shopingCart() {
    return cy.get('.shopping_cart_link')
}

get shopingCartBadge() {
    return this.shopingCart.get('.shopping_cart_badge')
}

get inventoryContainer() {
    return cy.get('.inventory_container')
}

//getting item detailview through parent element
get itemDetailview() {
    return this.inventoryContainer.get('.inventory_item_name').eq(2)
}

get addTshirt() {
    return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
}

get firstItemId() {
    return cy.get('#item_4_title_link')
}

get secondItemId() {
    return cy.get('#item_1_title_link')
}

get removeItem() {
    return cy.get('#remove-sauce-labs-backpack')
}

get itemName() {
    return cy.get('.inventory_item_name')
}


items() {

    this.addBackpack.click();
    this.shopingCartBadge.should('have.text', '1');
    this.itemDetailview.click();
    this.addTshirt.click();
    this.shopingCart.click();
    //using item id's to confirm that they are two different items
    this.firstItemId.should('not.eq', this.secondItemId)
    this.removeItem.click();
    this.itemName.should('have.text', 'Sauce Labs Bolt T-Shirt')
}


}

export const manageItems = new ManageItems();