import { Page , Locator, expect} from '@playwright/test';
import { BASE_URL } from '../conf/TestConfig'
import { BasePage } from './BasePage';

export class HomePage extends BasePage{
    private readonly topSearchInput : Locator;
    private readonly successAddToCartMessage : Locator
    private readonly shoppingCartLink : Locator

    constructor(page: Page) {
        super(page);
        this.topSearchInput = this.page.locator('#small-searchterms');
        this.successAddToCartMessage = this.page.getByText("The product has been added to");
        this.shoppingCartLink = this.page.getByRole('link', { name: 'Shopping cart', exact: false }).first();
    }

    // Actions
    async open() {
        await this.page.goto(BASE_URL);
    }

    async searchInTopInput(searchValue : string){
        await this.topSearchInput.click();
        await this.topSearchInput.fill(searchValue);
        await this.topSearchInput.press('Enter');
    }

    async addToCartSuccessMessageIsShown() {
        await expect(this.successAddToCartMessage).toBeVisible();
    }

    async goToShoppingCart() {
        await this.shoppingCartLink.click();
    }
}
