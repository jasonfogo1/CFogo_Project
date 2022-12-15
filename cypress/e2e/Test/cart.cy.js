/// <reference types="cypress" />
import HomePage from '../Pages/home.page.js'
import ProductPage from '../Pages/productsGallery.page.js'
import PDetailsPage from '../Pages/productDetail.page.js'
import Cart from '../Pages/cart.page.js'
describe('Cart', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(HomePage.btnSignInorReg).click();
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("volevelowa-69345@yopmail.com");
                cy.get('[type="password"]').type("Password1", { log: false });
                cy.get("[name='submit']").click();
            });
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products');
    })

    it('Validate an Item can be removed from cart from detailed cart page', () => {
        let product = 'Quality Hooded Sweatshirt'
        let prodAddBtn = ProductPage.AddToCartButtons(product);
        cy.get(prodAddBtn).scrollIntoView();
        cy.wait(1500);
        cy.get(prodAddBtn).click();
        cy.wait(1500);
        cy.get(ProductPage.btnCart).click();
        cy.wait(1500);
        cy.get(Cart.removeItem).click();
        cy.get(Cart.cartIcon).should('have.text',' 0 ');
    })
    it('Verify user can increase quantity from detailed cart page',()=>{
        let product='Quality Pink Pants'
        let prodAddBtn= ProductPage.AddToCartButtons(product);
        cy.get(prodAddBtn).scrollIntoView();
        cy.wait(1500);
        cy.get(prodAddBtn).click();
        cy.wait(1500);
        cy.get(ProductPage.btnCart).click();
        cy.wait(1500);
        cy.get(Cart.btnIncrement).click();
        cy.get(Cart.cartIcon).should('have.text',' 2 ');
    })
    it.only('Verify total in the cart ',()=>{
        let product='Quality Pink Pants'
        let prodAddBtn= ProductPage.AddToCartButtons(product);
        cy.get(prodAddBtn).scrollIntoView();
        cy.wait(1500);
        cy.get(prodAddBtn).click();
        let product2='Quality Hooded Sweatshirt'
        let prodAddBtn2= ProductPage.AddToCartButtons(product2);
        cy.wait(1500);
        //cy.get(CartPage.btnContinueShopping).click();
        cy.get(prodAddBtn2).scrollIntoView();
        cy.wait(1500);
        cy.get(prodAddBtn2).click();
        let sum=0;
        cy.get(Cart.itemPrice).forEach (($elem,index) =>{
            sum= sum + parseFloat($elem.text().replaceAll('$', ''));
           cy.log('price'+parseFloat($elem.text().replaceAll('$', '')));
           cy.wait(1500);
        })
        // .then(()=>{
        //   cy.get(Cart.cartTotal).should('eq','$'+sum);  

        // })
        //cy.get(CartPage.createSelector(product)).should('exist');
        //Add Assertion
    })
    


})