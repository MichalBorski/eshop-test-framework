import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BooksPage } from '../pages/categories_pages/BooksPage';

let homePage : HomePage;
test.beforeEach(async ({page}) => {
      homePage = new HomePage(page);
      await homePage.open();
});

test('basic', async ({page}) => {
      await homePage.topMenu.goToBooks();
      const booksPage : BooksPage = new BooksPage(page);

      await booksPage.sortBy('Created on')
      await booksPage.verifyOptionIsSelected('Created on')

      await booksPage.sortBy('Name: A to Z')
      await booksPage.verifyOptionIsSelected('Name: A to Z')
});
