
import { Page, Locator, expect } from '@playwright/test';

export class ShoppingCart {
    private readonly rows : Locator;
    constructor(private readonly page: Page) {
        this.rows = this.page.locator('tr.cart-item-row');

    }

    // Actions
    async verifyCountOfProducts(expectedCount: number) {
        const rowsCount = await this.rows.count();
        await expect(rowsCount).toBe(expectedCount);
    }

    
}