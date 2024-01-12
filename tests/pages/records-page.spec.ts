import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/records");

  await expect(page).toHaveTitle(/Qoluo/);
});

test("should navigate to the Records page", async ({ page }) => {
  await page.goto("/records");
  await page.click("text=Records");
  await expect(page).toHaveURL("/records");
  await expect(page.locator("h2")).toContainText("Records Overview");
});

test("should navigate to the Home page", async ({ page }) => {
  await page.goto("/records");
  await page.click("text=Home");
  await expect(page).toHaveURL("/");
  await expect(page.locator("h2")).toContainText("Accounts Overview");
});

test("should have Add Record button", async ({ page }) => {
  await page.goto("/records");
  await expect(page.getByText("Add Record")).toBeVisible();
});

test("should have a records table component", async ({ page }) => {
  await page.route(
    "http://127.0.0.1:3000/api/internal-api-handler-get-all-records",
    async (route) => {
      const dataToReturn = [
        {
          id: "1",
          recordType: "Expense",
          account: "Playwright e2e Mock",
          amount: "1",
          currency: "Playwright e2e Mock",
          date: "2024-01-10T22:53:33.374Z",
        },
        {
          id: "2",
          recordType: "Income",
          account: "Playwright e2e Mock",
          amount: "220",
          currency: "Playwright e2e Mock",
          date: "2024-01-10T22:53:33.374Z",
        },
      ];
      route.fulfill({
        status: 200,
        json: dataToReturn,
      });
    }
  );

  await page.route(
    "http://localhost:3000/api/internal-api-handler-get-all-records",
    async (route) => {
      const dataToReturn = [
        {
          id: "1",
          recordType: "Expense",
          account: "Playwright e2e Mock",
          amount: "1",
          currency: "Playwright e2e Mock",
          date: "2024-01-10T22:53:33.374Z",
        },
        {
          id: "2",
          recordType: "Income",
          account: "Playwright e2e Mock",
          amount: "220",
          currency: "Playwright e2e Mock",
          date: "2024-01-10T22:53:33.374Z",
        },
      ];
      route.fulfill({
        status: 200,
        json: dataToReturn,
      });
    }
  );

  await page.goto("/records");
  await page.waitForSelector("#records-table");
  await expect(page.locator("#records-table")).toBeVisible();
});

test("should have theme mode toggle on the page", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#theme-mode-toggle");
  await expect(page.locator("#theme-mode-toggle")).toBeVisible();
});
