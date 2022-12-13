class ProductPage{
    get btnCart(){
        return ('#top-cart');
    }
    get qualityMousepad(){
        return('img[src="/images/quality-mousepad.jpg"]');
    }
    get btnAddToCart(){
        return('#add-to-cart');
    }
    get productName(){
        return('.chakra-text.css-1n64n71');
    }
    get selectSort(){
        return('#sort');
    }
    get selectFilter(){
        return('#category');
    }
    get productCategory(){
        return('.css-1ccau2i');
    }
    get btnReset(){
        return('#reset');
    }
    get btnSignout(){
        return('#top-sign-out');
    }

     AddToCartButtons(prodname){
        prodname='[data-item-name="'+prodname+'"]'//accept 
        return prodname;   
    }
    getProductNames() {                          //Function to get all product names on the product page
        let products = [];
        cy.get(this.productName).each(($elem, index) => {
            products[index] = $elem.text();
            cy.log(products[index]);
        })
        
        return products;
        
    }

}
export default new ProductPage()