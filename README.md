# Playwright Automation Project - Demo Web Shop

This project contains end-to-end (E2E) automated tests for the [Demo Web Shop](https://demowebshop.tricentis.com/) website. It is built using **Playwright** with **TypeScript** and implements the **Page Object Model (POM)** design pattern.

## 🚀 Installation & Setup

Before you start, ensure you have **[Node.js](https://nodejs.org/)** installed on your system.

To get the project running locally, follow these steps in your terminal:

```bash
# 1. Clone the repository
git clone 
cd eshop-test-framework

# 2. Install Node.js dependencies
npm install

# 3. Install Playwright browser binaries
npx playwright install

Running tests (headless mode)
npx playwright test

Running test in UI interactive mode
npx playwright test --ui
```

Project Architecture & Features
Page Object Model (POM): Encapsulated page logic for better maintainability.

Type Safety: Used TypeScript Enums and Literal Types for category selection to eliminate typos.

Dynamic Locators: Utilized Regular Expressions to handle dynamic text in headings and cart labels.

Robust Selectors: Leveraged getByRole and class-based locators for stable test execution.

📂 Project Structure
tests/ - Test specifications (.spec.ts).

pages/ - Page Object classes.

component/ - Smaller elemens on the page.

playwright.config.ts - Main Playwright configuration.
