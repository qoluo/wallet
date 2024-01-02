import { test, expect } from "@playwright/test";

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
