import { test, expect } from './auth-utils';

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';

test.slow();

test('john can authenticate and view Molokai Plumerias homepage', async ({ getUserPage }) => {
  const customUserPage = await getUserPage('john@foo.com', 'changeme');

  await customUserPage.goto(BASE_URL);
  await customUserPage.waitForLoadState('networkidle');

  await expect(
    customUserPage.getByRole('button', { name: 'john@foo.com' })
  ).toBeVisible({ timeout: 10000 });

  await expect(
    customUserPage.getByRole('heading', { name: /Aloha a ho.okipa/i })
  ).toBeVisible({ timeout: 10000 });

  await expect(
    customUserPage.getByText('Molokai Grown Since 1983').first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    customUserPage.getByText('Beautiful island-grown plumerias with care, color, and aloha.').first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    customUserPage.getByRole('link', { name: 'About' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    customUserPage.getByRole('link', { name: 'Care Instructions' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    customUserPage.getByRole('link', { name: 'Flowers' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    customUserPage.getByRole('link', { name: 'Events' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    customUserPage.getByRole('link', { name: 'Contact Us' }).first()
  ).toBeVisible({ timeout: 5000 });

  await expect(
    customUserPage.getByRole('heading', { name: 'Rooted in Molokai, grown with care.' })
  ).toBeVisible({ timeout: 5000 });

  await expect(
    customUserPage.getByRole('heading', { name: 'Customer Reviews' })
  ).toBeVisible({ timeout: 5000 });
});
