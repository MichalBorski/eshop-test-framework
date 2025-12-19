import { Page } from '@playwright/test';
import { TopMenu } from './TopMenu';

export class BasePage {
    public readonly topMenu : TopMenu;
    protected page : Page;
    constructor(page: Page){
        this.page = page;
        this.topMenu = new TopMenu(page);
    }
}