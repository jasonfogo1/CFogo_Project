/// <reference types="cypress" />
import Authentication from '../Pages/authentication.page'
import HomePage from '../Pages/home.page.js'
import ProductPage from '../Pages/productsGallery.page.js'
import PDetailsPage from '../Pages/productDetail.page.js'
import CartPage from '../Pages/cart.page.js'
describe('Add to Cart',()=>{
beforeEach(()=>{
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

})
it('Verify a user can add a product to the cart from product details page.',()=>{
    cy.get(ProductPage.qualityMousepad).scrollIntoView();
    cy.wait(1500);
    cy.get(ProductPage.qualityMousepad).click();
    cy.wait(1500);
    cy.url().should('contain','https://ui-automation-camp.vercel.app/products/quality-mousepad');
    cy.wait(1500);
    cy.get(PDetailsPage.btnAddToCart).click();
    //Add Assertion

})
it('Verify a user can add a product to the cart from Products Gallery page.',()=>{
    let product='Quality Trucker Hat'
    let prodAddBtn= ProductPage.AddToCartButtons(product);
    cy.get(prodAddBtn).scrollIntoView();
    cy.wait(1500);
    cy.get(prodAddBtn).click();
    //cy.get(CartPage.createSelector(product)).should('exist');
    //Add Assertion
})
it.only('Verify a user can add multiple products to the cart from Products Gallery page.',()=>{
    let product='Quality Pink Pants'
    let prodAddBtn= ProductPage.AddToCartButtons(product);
    cy.get(prodAddBtn).scrollIntoView();
    cy.wait(1500);
    cy.get(prodAddBtn).click();
    cy.wait(5000);
   // cy.get(CartPage.btnContinueShopping).should('exist');
    //cy.get(CartPage.btnContinueShopping).click();
    let product2='Quality Hooded Sweatshirt'
    let prodAddBtn2= ProductPage.AddToCartButtons(product2);
    cy.get(prodAddBtn2).scrollIntoView();
    cy.wait(1500);
    cy.get(prodAddBtn2).click();
    //cy.get(CartPage.createSelector(product)).should('exist');
    //Add Assertion
})


})

