import { Page, Locator, expect } from '@playwright/test';

export class SearchResults{

    private readonly productItem : Locator;
    private readonly noProductsFoundMessage : Locator;
    constructor(private readonly page: Page){
        this.productItem = this.page.locator('.product-item');
        this.noProductsFoundMessage = this.page.getByText('No products were found that')
    }

    // Actions
    async openProductByName(productName : string) {
        const targetProduct = this.productItem.filter({ hasText: productName });
        await targetProduct.getByRole('link').first().click();
    }

    async validateResultsAreNotEmpty(){
        await expect(this.noProductsFoundMessage).not.toBeVisible();
    }

    async validateResultsAreEmpty(){
        await expect(this.noProductsFoundMessage).toBeVisible();
    }

    async verifyAllProductsAreInPriceRange(min: number, max: number) {
        const priceElements = this.productItem.locator('.actual-price');
        const allPrices = await priceElements.allTextContents();

        for (const priceText of allPrices) {
            const priceValue = parseFloat(priceText.trim());

            expect(priceValue).toBeGreaterThanOrEqual(min);
            expect(priceValue).toBeLessThanOrEqual(max);
        }
    }
}