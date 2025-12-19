import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { ProductDetails } from '../components/ProductDetails';
import { ShoppingCart } from '../components/ShoppingCart';

let homePage : HomePage;
test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
});

// 5. Add to Cart
// • Add a product to the cart (from either path).
// • Verify the cart updates correctly with the selected item (e.g., name, price,
// quantity).

test('User can add product to a cart.', async ({page}) => {
    // Arrange
    const searchPage = new SearchPage(page);
    const productDetails = new ProductDetails(page);
    const shoppingCart = new ShoppingCart(page);
    await homePage.open();

    await homePage.topMenu.goToComputersSubcategory("Notebooks");
    await searchPage.searchResults.openProductByName("14.1-inch Laptop");
    await productDetails.verifyProductPageContainsHeading("Laptop");

    // Act
    await productDetails.addToCart();

    // Assert
    await homePage.addToCartSuccessMessageIsShown();
    await homePage.goToShoppingCart();
    await shoppingCart.verifyCountOfProducts(1);

});