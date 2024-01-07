import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Qoluo/);
});

test("should navigate to the Home page", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Home");
  await expect(page).toHaveURL("/");
  await expect(page.locator("h2")).toContainText("Accounts Overview");
});

test("should navigate to the Records page", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Records");
  await expect(page).toHaveURL("/records");
  await expect(page.locator("h2")).toContainText("Records Overview");
});

test("should have theme mode toggle on the page", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector("#theme-mode-toggle");
  await expect(page.locator("#theme-mode-toggle")).toBeVisible();
});
