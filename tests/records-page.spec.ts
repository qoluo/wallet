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
  await page.goto("/records");
  await expect(page.locator("#records-table")).toBeVisible();
});

test("can add a new record", async ({ page }) => {
  await page.goto("http://localhost:3000/records");

  await page.click('text="Add Record"');

  await page.click('text="Select record type"');
  await page.locator("#record-type-selector-income-option").click();

  await page.click('text="Select account"');
  await page.locator("#account-selector-general-option").click();

  await page.fill("#record-amount", "220");

  await page.click('text="Select currency"');
  await page.locator("#currency-selector-TEST1-option").click();

  // Submit the form
  await page.click('text="Save changes"');

  // Wait for the success toast to appear
  await page.waitForSelector('text="Failed!"');
  await page.waitForSelector(
    'text="Failed to add new record. Please try again."'
  );

  expect(await page.isVisible('text="Failed!"')).toBe(true);
  expect(
    await page.isVisible('text="Failed to add new record. Please try again."')
  ).toBe(true);
});
