import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { ProductDetails } from '../components/ProductDetails';

let homePage : HomePage;
test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
});

// 3. Product Discovery — Path A (Search + Filter)
// • Use search to find products related to “electronics”.
// • Apply available filters to narrow results to a specific range (e.g., price range or
// any range-based filter present in the UI).
// • Verify that displayed products match the search criteria and applied filters
// (handle edge cases such as 0 results).

test('User can search for product and narrowed by price range.', async ({page}) => {
    const searchPage = new SearchPage(page);
    await homePage.open();

    await homePage.searchInTopInput("Gift card");

    await searchPage.searchPanel.checkAdvancedSearch();
    await searchPage.searchPanel.filterByPriceRange(20,60);
    await searchPage.searchPanel.clickSearchButton();

    // assert
    await searchPage.searchResults.validateResultsAreNotEmpty();
    await searchPage.searchResults.verifyAllProductsAreInPriceRange(20, 60);

});

test('User cannot search non existing product.', async ({page}) => {
    const searchPage = new SearchPage(page);
    await homePage.open();

    await homePage.searchInTopInput("teddy bear");

    // assert
    await searchPage.searchResults.validateResultsAreEmpty();
});

// 4. Product Discovery — Path B (Browse / Category / Featured)
// • Reach a product via a different navigation path than search (e.g., category
// listing, featured products, recommendations).
// • Open a product details page.
test('User can search product by category and open product details', async ({page}) => {
    const searchPage = new SearchPage(page);
    const productDetails = new ProductDetails(page);
    await homePage.open();

    await homePage.topMenu.goToComputersSubcategory("Notebooks");

    await searchPage.searchResults.openProductByName("14.1-inch Laptop");

    await productDetails.verifyProductPageContainsHeading("Laptop");
});
