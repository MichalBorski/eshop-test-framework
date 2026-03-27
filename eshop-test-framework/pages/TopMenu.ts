import { Page, Locator } from '@playwright/test'

export type ComputerSubcategory = 'Desktops' | 'Notebooks' | 'Accessories';

export class TopMenu{
    private booksLink : Locator;
    private computersLink : Locator;
    private readonly page : Page;
    constructor(page: Page){
        this.page = page;
        this.booksLink = page.getByRole('link', {name : "Books"}).first();
        this.computersLink = page.getByRole('link', { name: 'Computers' }).first();
    }

    // Actions
    async goToBooks(){
        await this.booksLink.click();
    }

    async goToComputers() {
        await this.computersLink.click();
    }

    async goToComputersSubcategory(categoryName : ComputerSubcategory) {
        await this.computersLink.hover();
        await this.page.getByRole('link', { name: categoryName }).click();
    }
}