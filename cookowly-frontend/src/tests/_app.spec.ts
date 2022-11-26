import { test, expect } from '@playwright/test';
import { getDataPWAttribute } from './utilities';

const breakpointsWithSidebar = [1280, 1536];
// const breakpointsWithoutSidebar = [480, 640, 768, 1024];
// const breakpointsWithIconsInsideNavigation = [480, 640];
// const breakpointsWithButtonsInsideNavigation = [768, 1024, 1280, 1536];
const sidebarLocator = getDataPWAttribute('sidebar');

test.describe('Should test layout', () => {
  test.beforeEach(async ({ page }) => {
    // TODO https://playwright.dev/docs/test-advanced
    await page.goto('/');
  });
  // breakpointsWithSidebar.forEach((breakpoint) => {
  test(`Should display sidebar on breakpoint '${breakpointsWithSidebar[0]}'`, async ({ page }) => {
    await page.setViewportSize({ width: breakpointsWithSidebar[0], height: 1080 });
    const sidebar = await page.locator(sidebarLocator);
    expect(sidebar).toBeVisible();
    const sidebarHeader = await sidebar.locator('header');
    expect(sidebarHeader).toBeVisible();
    // });
  });
});
