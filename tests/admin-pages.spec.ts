import { test, expect } from './auth-utils';

test.slow();
test('test access to admin page', async ({ getUserPage }) => {
  // Call the getUserPage fixture with admin signin info to get authenticated session for admin
  const adminPage = await getUserPage('admin@foo.com', 'changeme');

  // Navigate to the home page and wait for post-login indicator
  await adminPage.goto('/');
  await expect(
    adminPage.getByRole('button', { name: 'admin@foo.com' })
  ).toBeVisible({ timeout: 10000 });

  // Check for current navigation elements
  await expect(adminPage.getByRole('link', { name: 'Home', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'About', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'Care Instructions', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'Flowers', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'Events', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(adminPage.getByRole('link', { name: 'Contact Us', exact: true })).toBeVisible({ timeout: 5000 });

  // Test Add Stuff page
  await adminPage.goto('/add');
  await expect(
    adminPage.getByRole('heading', { name: 'Add Stuff' })
  ).toBeVisible({ timeout: 5000 });

  // Test List Stuff page
  await adminPage.goto('/list');
  await expect(
    adminPage.getByRole('heading', { name: 'Stuff' })
  ).toBeVisible({ timeout: 5000 });

  // Test Admin page from the authenticated account menu
  await adminPage.getByRole('button', { name: 'admin@foo.com' }).click();
  await adminPage.getByRole('link', { name: 'Admin' }).click();
  await expect(
    adminPage.getByRole('heading', { name: 'List Stuff Admin' })
  ).toBeVisible({ timeout: 5000 });
  await expect(
    adminPage.getByRole('heading', { name: 'List Users Admin' })
  ).toBeVisible({ timeout: 5000 });

});
