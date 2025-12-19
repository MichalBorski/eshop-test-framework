import { Page } from '@playwright/test';
import { BasePage } from "./BasePage";
import { SearchPanel } from '../components/SearchPanel';
import { SearchResults } from '../components/SearchResults';

export class SearchPage extends BasePage {
    public readonly searchPanel: SearchPanel;
    public readonly searchResults: SearchResults;

    constructor(page: Page) {
        super(page);
        this.searchPanel = new SearchPanel(page);
        this.searchResults = new SearchResults(page);
    }
}