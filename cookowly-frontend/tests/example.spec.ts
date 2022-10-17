import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  const element = await page.locator('[data-pw="hello-world"]');
  await expect(element).toHaveClass('bg-red-500 text-blue-500');
});
