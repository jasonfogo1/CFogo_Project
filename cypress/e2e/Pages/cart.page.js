class CartPage{
    // get (){
    //     return('#signInOrRegister');
    // }
    createSelector(prodname){
        prodname=('//h2[contains(text(),"'+prodname+'")]')
        return prodname;   
    }
}
export default new CartPage()