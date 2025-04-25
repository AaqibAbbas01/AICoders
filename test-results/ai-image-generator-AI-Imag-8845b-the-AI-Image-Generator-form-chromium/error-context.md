# Test info

- Name: AI Image Generator >> should render the AI Image Generator form
- Location: /Users/aaqibabbas/institute-website/tests/ai-image-generator.spec.ts:8:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('heading', { name: 'AI Image Generator' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('heading', { name: 'AI Image Generator' })

    at /Users/aaqibabbas/institute-website/tests/ai-image-generator.spec.ts:10:77
```

# Page snapshot

```yaml
- banner:
  - link "<AICodersHub/>":
    - /url: /
  - navigation:
    - link "01.Home":
      - /url: /
    - link "02.Syllabus":
      - /url: /syllabus
    - link "03.About":
      - /url: /about
    - link "04.Contact":
      - /url: /contact
    - link "[ Book_a_Slot ]":
      - /url: /book-slot
      - text: "[ Book_a_Slot ]"
      - img
    - button "Toggle dark mode":
      - img
- main:
  - heading "404" [level=1]
  - heading "This page could not be found." [level=2]
- contentinfo:
  - heading "<AICodersHub/>" [level=3]
  - paragraph: Empowering the next generation of automation engineers with comprehensive training in Playwright, Manual Testing, and AI Integration.
  - heading "> Quick_Links" [level=4]
  - list:
    - listitem:
      - link "> Home":
        - /url: /
    - listitem:
      - link "> Course Syllabus":
        - /url: /syllabus
    - listitem:
      - link "> About Us":
        - /url: /about
    - listitem:
      - link "> Contact":
        - /url: /contact
  - heading "> Contact_Info" [level=4]
  - list:
    - listitem: "[loc] E-47 , Paryavaran Complex, Sainik Farms, New Delhi 110030"
    - listitem: "[tel] +918178199664"
    - listitem: "[msg] aaqib817819@gmail.com"
  - heading "> Connect_Socials" [level=4]
  - link:
    - /url: https://twitter.com
  - link:
    - /url: https://linkedin.com
  - link:
    - /url: https://facebook.com
  - paragraph: © 2025 Tech Institute // All rights reserved
- alert
- button "Open Next.js Dev Tools":
  - img
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
> 10 |     await expect(page.getByRole('heading', { name: 'AI Image Generator' })).toBeVisible();
     |                                                                             ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  11 |
  12 |     // Check if the form elements are present
  13 |     await expect(page.getByLabel('Prompt')).toBeVisible();
  14 |     await expect(page.getByLabel('Style Preset')).toBeVisible();
  15 |     await expect(page.getByRole('button', { name: 'Generate Image' })).toBeVisible();
  16 |   });
  17 |
  18 |   test('should handle image generation flow', async ({ page }) => {
  19 |     // Fill in the form
  20 |     await page.getByLabel('Prompt').fill('A beautiful sunset over mountains');
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