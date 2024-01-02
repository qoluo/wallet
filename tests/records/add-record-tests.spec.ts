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

  await page.click('text="Save changes"');

  await page.waitForSelector('text="Success!"');
  await page.waitForSelector('text="New record has been added."');

  expect(await page.isVisible('text="Success!"')).toBe(true);
  expect(await page.isVisible('text="New record has been added."')).toBe(true);
});

test("empty record-type field should return error from zod", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/records");

  await page.click('text="Add Record"');

  await page.click('text="Select account"');
  await page.locator("#account-selector-general-option").click();

  await page.fill("#record-amount", "220");

  await page.click('text="Select currency"');
  await page.locator("#currency-selector-TEST1-option").click();

  await page.click('text="Save changes"');

  await page.waitForSelector('text="Please select a record type."');

  expect(await page.isVisible('text="Please select a record type."')).toBe(
    true
  );
});

test("empty account field should return error from zod", async ({ page }) => {
  await page.goto("http://localhost:3000/records");

  await page.click('text="Add Record"');

  await page.click('text="Select record type"');
  await page.locator("#record-type-selector-income-option").click();

  await page.fill("#record-amount", "220");

  await page.click('text="Select currency"');
  await page.locator("#currency-selector-TEST1-option").click();

  await page.click('text="Save changes"');

  await page.waitForSelector('text="Please select an account."');

  expect(await page.isVisible('text="Please select an account."')).toBe(true);
});

test("empty amount field should return error from zod", async ({ page }) => {
  await page.goto("http://localhost:3000/records");

  await page.click('text="Add Record"');

  await page.click('text="Select record type"');
  await page.locator("#record-type-selector-income-option").click();

  await page.click('text="Select account"');
  await page.locator("#account-selector-general-option").click();

  await page.click('text="Select currency"');
  await page.locator("#currency-selector-TEST1-option").click();

  await page.click('text="Save changes"');

  await page.waitForSelector('text="Required"');

  expect(await page.isVisible('text="Required"')).toBe(true);
});

test("amount field with negative value should return error from zod", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/records");

  await page.click('text="Add Record"');

  await page.click('text="Select record type"');
  await page.locator("#record-type-selector-income-option").click();

  await page.click('text="Select account"');
  await page.locator("#account-selector-general-option").click();

  await page.fill("#record-amount", "-1");

  await page.click('text="Select currency"');
  await page.locator("#currency-selector-TEST1-option").click();

  await page.click('text="Save changes"');

  await page.waitForSelector('text="Please enter amount higher than 0."');

  expect(
    await page.isVisible('text="Please enter amount higher than 0."')
  ).toBe(true);
});

test("amount field with float value higher than 0 should return error from zod", async ({
  page,
}) => {
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

  await page.fill("#record-amount", "0.1");

  await page.click('text="Select currency"');
  await page.locator("#currency-selector-TEST1-option").click();

  await page.click('text="Save changes"');

  await page.waitForSelector('text="Success!"');
  await page.waitForSelector('text="New record has been added."');

  expect(await page.isVisible('text="Success!"')).toBe(true);
  expect(await page.isVisible('text="New record has been added."')).toBe(true);
});

test("missing currency field should return error from zod", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/records");

  await page.click('text="Add Record"');

  await page.click('text="Select record type"');
  await page.locator("#record-type-selector-income-option").click();

  await page.click('text="Select account"');
  await page.locator("#account-selector-general-option").click();

  await page.fill("#record-amount", "220");

  await page.click('text="Save changes"');

  await page.waitForSelector('text="Please select a currency."');

  expect(await page.isVisible('text="Please select a currency."')).toBe(true);
});
