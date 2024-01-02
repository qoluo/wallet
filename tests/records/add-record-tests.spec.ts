import { test, expect } from "@playwright/test";

test("can add a new record", async ({ page }) => {
  await page.route("/api/internal-api-handler-add-record", async (route) => {
    route.fulfill({
      status: 201,
    });
  });

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
  await page.waitForSelector('text="Success!"');
  await page.waitForSelector('text="New record has been added."');

  expect(await page.isVisible('text="Success!"')).toBe(true);
  expect(await page.isVisible('text="New record has been added."')).toBe(true);
});
