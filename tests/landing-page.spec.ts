import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(/Qoluo/);
});

test("should navigate to the Home page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Home");
  await expect(page).toHaveURL("http://localhost:3000/");
  await expect(page.locator("h2")).toContainText("Accounts Overview");
});

test("should navigate to the Records page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Records");
  await expect(page).toHaveURL("http://localhost:3000/records");
  await expect(page.locator("h2")).toContainText("Records Overview");
});
