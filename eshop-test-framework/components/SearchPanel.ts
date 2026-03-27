import { Page, Locator } from '@playwright/test';

export class SearchPanel {
    // Locators
    private readonly advanceSearchCheckbox : Locator;
    private readonly advanceSearchButton : Locator;
    private readonly priceFrom : Locator;
    private readonly priceTo : Locator;
    
    constructor(private readonly page: Page) {
        this.advanceSearchCheckbox = this.page.getByRole('checkbox', { name: 'Advanced search' })
        this.priceFrom = this.page.locator('#Pf')
        this.priceTo = this.page.locator('#Pt')
        this.advanceSearchButton = this.page.locator('form').filter({ hasText: 'Search keyword: Advanced' }).getByRole('button');
    }

    // Actions
    async checkAdvancedSearch() {
        await this.advanceSearchCheckbox.check();
    }

    async filterByPriceRange(from : number, to: number){
        await this.priceFrom.fill(from.toString());
        await this.priceTo.fill(to.toString());
    }

    async clickSearchButton(){
        await this.advanceSearchButton.click();
    }
}