import { test, expect } from './auth-utils';

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';

test.slow();

test('admin can authenticate and view Molokai Plumerias homepage', async ({ getUserPage }) => {
  const adminPage = await getUserPage('admin@foo.com', 'changeme');

  await adminPage.goto(BASE_URL);
  await adminPage.waitForLoadState('networkidle');

  await expect(
    adminPage.getByRole('button', { name: 'admin@foo.com' })
  ).toBeVisible({ timeout: 10000 });

  await expect(
    adminPage.getByRole('heading', { name: /Aloha a ho.okipa/i })
  ).toBeVisible({ timeout: 10000 });

  await expect(
    adminPage.getByText('Molokai Grown Since 1983').first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByText('Beautiful island-grown plumerias with care, color, and aloha.').first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByRole('link', { name: 'About' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByRole('link', { name: 'Care Instructions' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByRole('link', { name: 'Flowers' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByRole('link', { name: 'Events' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByRole('link', { name: 'Contact Us' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByRole('heading', { name: 'Rooted in Molokai, grown with care.' })
  ).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByRole('heading', { name: 'Customer Reviews' })
  ).toBeVisible({ timeout: 5000 });
});
