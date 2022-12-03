import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const host = process.env.PW_BASE_URL;
const port = process.env.PW_APP_PORT;

if (!host) {
  throw new Error(
    `Playwright cannot be executed because some configuration is missing: 
      please provide a url in the .env file with the key 'PW_BASE_URL'`,
  );
}

if (!host) {
  throw new Error(
    `Playwright cannot be executed because some configuration is missing: 
      please provide a port in the .env file with the key 'PW_APP_PORT'`,
  );
}

const baseURL = `${host}:${port}`;

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  snapshotDir: './__snapshots__',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },

    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },

    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
