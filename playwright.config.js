import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'test/e2e/sample.feature',
  steps: 'test/e2e/steps.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});