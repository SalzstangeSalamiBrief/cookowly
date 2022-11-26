import { test, expect } from '@playwright/test';
// import { navigationLinks } from '../components/navigation/Navigation';
import { getDataPWAttribute } from './utilities';

const breakpointsShowingSidebar = [1280, 1536];
const breakpointsHidingSidebar = [480, 640, 768, 1024];
const breakpointsForIconButtonsInsideNavigation = [480, 640];
const breakpointsForButtonsInsideNavigation = [768, 1024, 1280, 1536];
const sidebarLocator = getDataPWAttribute('sidebar');
const navigationLocator = getDataPWAttribute('navigation');

test.describe('Should test layout', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    console.log(baseURL);
    await page.goto('/');
  });

  breakpointsShowingSidebar.forEach((breakpoint) => {
    test(`Should display sidebar on breakpoint '${breakpoint}'`, async ({ page }) => {
      await page.setViewportSize({ width: breakpoint, height: 1080 });
      const sidebar = await page.locator(sidebarLocator);
      await expect(sidebar).toBeVisible();
      await expect(sidebar).toHaveCount(1); // check for existence
      const sidebarHeader = await sidebar.locator('header');
      await expect(sidebarHeader).toBeVisible();
      await expect(sidebarHeader).toHaveCount(1); // check for existence
    });
  });

  breakpointsHidingSidebar.forEach((breakpoint) => {
    test(`Should not render sidebar on breakpoint '${breakpoint}'`, async ({ page }) => {
      await page.setViewportSize({ width: breakpoint, height: 1080 });
      const sidebar = await page.locator(sidebarLocator);
      await sidebar.isHidden();
    });
  });

  breakpointsForButtonsInsideNavigation.forEach((breakpoint) => {
    test(`Should render buttons in the navigation on '${breakpoint}'`, async ({ page }) => {
      await page.setViewportSize({ width: breakpoint, height: 1080 });
      const anchors = await page.locator(`${navigationLocator} [data-pw^="button"]`);
      await expect(anchors).toHaveCount(5);
      const buttons = await page.locator(`${navigationLocator} button[data-pw^="button"]`);
      await expect(buttons).toHaveCount(0);
      await buttons.isHidden();
    });
  });

  breakpointsForIconButtonsInsideNavigation.forEach((breakpoint) => {
    test(`Should render icon buttons in the navigation on '${breakpoint}'`, async ({ page }) => {
      await page.setViewportSize({ width: breakpoint, height: 1080 });
      const anchors = await page.locator(`${navigationLocator} [data-pw^="icon-button"]`);
      await expect(anchors).toHaveCount(5);
      const buttons = await page.locator(`${navigationLocator} button[data-pw^="icon-button"]`);
      await expect(buttons).toHaveCount(0);
      await buttons.isHidden();
    });
  });

  // TODO: TESTS FÜR HEADER ARE MISSING DUE TO MISSING LOGIC IN THE COMPONENT => ADD THEM LATER
});
