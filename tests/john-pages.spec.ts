import { test, expect } from './auth-utils';

test.slow();

test('john can authenticate and access protected pages', async ({ getUserPage }) => {
  const johnPage = await getUserPage('john@foo.com', 'changeme');

  await johnPage.goto('/');
  await expect(
    johnPage.getByRole('button', { name: 'john@foo.com' }),
  ).toBeVisible({ timeout: 10000 });

  await expect(
    johnPage.getByRole('heading', { name: /Aloha a ho.okipa/i }),
  ).toBeVisible({ timeout: 10000 });
  await expect(johnPage.getByText('Molokai Grown Since 1983').first()).toBeVisible({ timeout: 5000 });
  await expect(
    johnPage.getByText('Beautiful island-grown plumerias with care, color, and aloha.').first(),
  ).toBeVisible({ timeout: 5000 });

  await expect(johnPage.getByRole('link', { name: 'Home', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(johnPage.getByRole('link', { name: 'About', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(johnPage.getByRole('link', { name: 'Care Instructions', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(johnPage.getByRole('link', { name: 'Flowers', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(johnPage.getByRole('link', { name: 'Events', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(johnPage.getByRole('link', { name: 'Contact Us', exact: true })).toBeVisible({ timeout: 5000 });

  await expect(
    johnPage.getByRole('heading', { name: 'Rooted in Molokai, grown with care.' }),
  ).toBeVisible({ timeout: 5000 });
  await expect(
    johnPage.getByText('Customer Reviews').first(),
  ).toBeVisible({ timeout: 5000 });

  await johnPage.goto('/add');
  await expect(
    johnPage.getByRole('heading', { name: 'Add Stuff' }),
  ).toBeVisible({ timeout: 5000 });

  await johnPage.goto('/list');
  await expect(
    johnPage.getByRole('heading', { name: 'Stuff' }),
  ).toBeVisible({ timeout: 5000 });
});
