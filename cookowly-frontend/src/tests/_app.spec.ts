import { expect, test } from '@playwright/test';
// import { navigationLinks } from '../components/navigation/Navigation';
import { getDataPWAttribute } from './utilities';

const breakpointsForIconButtonsInsideNavigation = [480, 640];
const breakpointsForButtonsInsideNavigation = [768, 1024, 1280, 1536];
const navigationLocator = getDataPWAttribute('navigation');

test.describe('Should test layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  breakpointsForButtonsInsideNavigation.forEach((breakpoint) => {
    test(`Should render buttons in the navigation on '${breakpoint}'`, async ({ page }) => {
      await page.setViewportSize({ width: breakpoint, height: 1080 });
      const anchors = page.locator(`${navigationLocator} [data-pw^="button"]`);
      await expect(anchors).toHaveCount(5);
      const buttons = page.locator(`${navigationLocator} button[data-pw^="button"]`);
      await expect(buttons).toHaveCount(0);
      await buttons.isHidden();
    });
  });

  breakpointsForIconButtonsInsideNavigation.forEach((breakpoint) => {
    test(`Should render icon buttons in the navigation on '${breakpoint}'`, async ({ page }) => {
      await page.setViewportSize({ width: breakpoint, height: 1080 });
      const anchors = page.locator(`${navigationLocator} [data-pw^="icon-button"]`);
      await expect(anchors).toHaveCount(5);
      const buttons = page.locator(`${navigationLocator} button[data-pw^="icon-button"]`);
      await expect(buttons).toHaveCount(1);
      await buttons.isHidden();
    });
  });

  // TODO: TESTS FOR HEADER ARE MISSING DUE TO MISSING LOGIC IN THE COMPONENT => ADD THEM LATER
});
