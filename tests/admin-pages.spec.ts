import { test, expect } from './auth-utils';

test.slow();

test('admin can authenticate and access protected pages', async ({ getUserPage }) => {
  const adminPage = await getUserPage('admin@foo.com', 'changeme');

  await adminPage.goto('/');
  await expect(
    adminPage.getByRole('button', { name: 'admin@foo.com' }),
  ).toBeVisible({ timeout: 10000 });

  await expect(
    adminPage.getByRole('heading', { name: /Aloha a ho.okipa/i }),
  ).toBeVisible({ timeout: 10000 });
  await expect(adminPage.getByText('Molokai Grown Since 1983').first()).toBeVisible({ timeout: 5000 });
  await expect(
    adminPage.getByText('Beautiful island-grown plumerias with care, color, and aloha.').first(),
  ).toBeVisible({ timeout: 5000 });

  await expect(adminPage.getByRole('link', { name: 'Home', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'About', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'Care Instructions', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'Flowers', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'Events', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'Contact Us', exact: true })).toBeVisible({ timeout: 5000 });

  await expect(
    adminPage.getByRole('heading', { name: 'Rooted in Molokai, grown with care.' }),
  ).toBeVisible({ timeout: 5000 });
  await expect(
    adminPage.getByText('Customer Reviews').first(),
  ).toBeVisible({ timeout: 5000 });

  await adminPage.goto('/add');
  await expect(
    adminPage.getByRole('heading', { name: 'Add Stuff' }),
  ).toBeVisible({ timeout: 5000 });

  await adminPage.goto('/list');
  await expect(
    adminPage.getByRole('heading', { name: 'Stuff' }),
  ).toBeVisible({ timeout: 5000 });

  await adminPage.getByRole('button', { name: 'admin@foo.com' }).click();
  await adminPage.getByRole('link', { name: 'Admin' }).click();
  await expect(
    adminPage.getByRole('heading', { name: 'List Stuff Admin' }),
  ).toBeVisible({ timeout: 5000 });
  await expect(
    adminPage.getByRole('heading', { name: 'List Users Admin' }),
  ).toBeVisible({ timeout: 5000 });
});
