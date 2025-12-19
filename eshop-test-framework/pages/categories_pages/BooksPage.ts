import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from '../BasePage';

export class BooksPage extends BasePage{
    private readonly sortByFilter : Locator;
    constructor(page: Page) {
        super(page)
        this.sortByFilter = page.locator('#products-orderby');
    }

    // Actions
    public async sortBy (optionName : string){
        await this.sortByFilter.selectOption(optionName);
    }

    // Assertions
    async verifyOptionIsSelected(optionName : string){
        await expect(this.sortByFilter.locator('option:checked')).toHaveText(optionName);
    }
}