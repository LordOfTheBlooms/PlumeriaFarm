import { test, expect } from './auth-utils';

test.slow();
test('can authenticate a specific user', async ({ getUserPage }) => {

  // Call the getUserPage fixture with users signin info to get authenticated session for user
  const customUserPage = await getUserPage('john@foo.com', 'changeme');

  // Navigate to the home page and wait for post-login indicator
  await customUserPage.goto('/');
  await expect(
    customUserPage.getByRole('button', { name: 'john@foo.com' })
  ).toBeVisible({ timeout: 10000 });

  // Now check for current navigation links and protected page headings
  await expect(customUserPage.getByRole('link', { name: 'Home', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(customUserPage.getByRole('link', { name: 'About', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(customUserPage.getByRole('link', { name: 'Care Instructions', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(customUserPage.getByRole('link', { name: 'Flowers', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(customUserPage.getByRole('link', { name: 'Events', exact: true })).toBeVisible({ timeout: 5000 });
  await expect(customUserPage.getByRole('link', { name: 'Contact Us', exact: true })).toBeVisible({ timeout: 5000 });

  await customUserPage.goto('/add');
  await expect(
    customUserPage.getByRole('heading', { name: 'Add Stuff' })
  ).toBeVisible({ timeout: 5000 });

  await customUserPage.goto('/list');
  await expect(
    customUserPage.getByRole('heading', { name: 'Stuff' })
  ).toBeVisible({ timeout: 5000 });

});
