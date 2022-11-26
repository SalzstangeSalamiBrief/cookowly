import { test, expect } from '@playwright/test';
import { getDataPWAttribute } from './utilities';

const breakpointsWithSidebar = [1280, 1536];
// const breakpointsWithoutSidebar = [480, 640, 768, 1024];
// const breakpointsWithIconsInsideNavigation = [480, 640];
// const breakpointsWithButtonsInsideNavigation = [768, 1024, 1280, 1536];

// TIODO THIS TEST DOES DIE WITH THE MESSAGE TIMEOUT ON CONTEXT
test.describe('Should test layout', () => {
  test.beforeEach(async ({ page }) => {
    // TODO https://playwright.dev/docs/test-advanced
    await page.goto('/');
  });
  // breakpointsWithSidebar.forEach((breakpoint) => {
  test(`Should display sidebar on breakpoint '${breakpointsWithSidebar[0]}'`, async ({ page }) => {
    await page.setViewportSize({ width: breakpointsWithSidebar[0], height: 1080 });
    // await page.goto('http://localhost:3000');
    const sidebarLocator = getDataPWAttribute('sidebar');
    const sidebar = await page.locator(sidebarLocator);
    await expect(sidebar).toBeVisible();
    const sidebarHeader = await sidebar.locator('header');
    await expect(sidebarHeader).toBeVisible();
    // });
  });
});
