# Test info

- Name: AI Image Generator >> should handle image generation flow
- Location: /Users/aaqibabbas/institute-website/tests/ai-image-generator.spec.ts:18:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Prompt')

    at /Users/aaqibabbas/institute-website/tests/ai-image-generator.spec.ts:20:37
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('AI Image Generator', () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     await page.goto('/ai-image-generator');
   6 |   });
   7 |
   8 |   test('should render the AI Image Generator form', async ({ page }) => {
   9 |     // Check if the title is visible
  10 |     await expect(page.getByRole('heading', { name: 'AI Image Generator' })).toBeVisible();
  11 |
  12 |     // Check if the form elements are present
  13 |     await expect(page.getByLabel('Prompt')).toBeVisible();
  14 |     await expect(page.getByLabel('Style Preset')).toBeVisible();
  15 |     await expect(page.getByRole('button', { name: 'Generate Image' })).toBeVisible();
  16 |   });
  17 |
  18 |   test('should handle image generation flow', async ({ page }) => {
  19 |     // Fill in the form
> 20 |     await page.getByLabel('Prompt').fill('A beautiful sunset over mountains');
     |                                     ^ Error: locator.fill: Target page, context or browser has been closed
  21 |     await page.getByLabel('Style Preset').selectOption('digital-art');
  22 |     
  23 |     // Click generate and check loading state
  24 |     await page.getByRole('button', { name: 'Generate Image' }).click();
  25 |     await expect(page.getByRole('button', { name: 'Generating...' })).toBeVisible();
  26 |     
  27 |     // Wait for the image to appear (this assumes the API responds within 30 seconds)
  28 |     await expect(page.getByRole('img', { name: 'Generated image' })).toBeVisible({ timeout: 30000 });
  29 |   });
  30 |
  31 |   test('should handle API errors gracefully', async ({ page }) => {
  32 |     // Mock a failed API response
  33 |     await page.route('/api/generate-image', async (route) => {
  34 |       await route.fulfill({
  35 |         status: 500,
  36 |         body: JSON.stringify({ error: 'Internal server error' })
  37 |       });
  38 |     });
  39 |
  40 |     // Fill and submit the form
  41 |     await page.getByLabel('Prompt').fill('Test error handling');
  42 |     await page.getByRole('button', { name: 'Generate Image' }).click();
  43 |
  44 |     // Check if error message is displayed
  45 |     await expect(page.getByText('Failed to generate image. Please try again.')).toBeVisible();
  46 |   });
  47 | }); 
```