// components/SearchPanel.ts
import { Page, Locator, expect } from '@playwright/test';

export class ProductDetails {
    private readonly addToCartButton : Locator;
    private readonly successAddToCartMessage : Locator
    constructor(private readonly page: Page) {
        this.addToCartButton = this.page.locator('.product-essential')
            .getByRole("button", {name: "Add To Cart"});
        
        this.successAddToCartMessage = this.page.getByText("The product has been added to");
    }

    // Actions
    async verifyProductPageContainsHeading(heading: string){
        await expect(this.page.getByRole('heading', { name: heading, exact: false })).toBeVisible();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }


}