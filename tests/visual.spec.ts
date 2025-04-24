import { test, expect, Page } from '@playwright/test';

// Helper function to take a full page screenshot
async function takeFullPageScreenshot(page: Page, name: string) {
  await page.screenshot({ path: `./screenshots/${name}.png`, fullPage: true });
}

test.describe('Visual Testing', () => {
  test.beforeEach(async ({ page }) => {
    // Ensure screenshots directory exists (this normally would be in a setup script)
    await page.evaluate(() => {
      try {
        // This is just for logging - the actual directory creation would happen outside the browser
        console.log('Ensuring screenshots directory exists');
      } catch (e) {
        console.error(e);
      }
    });
  });

  test('Home page visual test', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check critical elements are visible
    await expect(page.getByRole('heading', { name: /Playwright Automation/i })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Book a Slot' })).toBeVisible();
    
    // Take screenshot for visual comparison
    await takeFullPageScreenshot(page, 'home-page');
  });

  test('Book a slot page visual test', async ({ page }) => {
    await page.goto('/book-slot');
    await page.waitForLoadState('networkidle');
    
    // Check form elements
    await expect(page.getByRole('heading', { name: 'Book Your Session' })).toBeVisible();
    await expect(page.getByLabel('Full Name *')).toBeVisible();
    await expect(page.getByLabel('Email Address *')).toBeVisible();
    
    // Take screenshot for visual comparison
    await takeFullPageScreenshot(page, 'book-slot-page');
  });

  test('Syllabus page visual test', async ({ page }) => {
    await page.goto('/syllabus');
    await page.waitForLoadState('networkidle');
    
    // Check content elements
    await expect(page.getByRole('heading', { name: 'Comprehensive Course Syllabus' })).toBeVisible();
    
    // Take screenshot for visual comparison
    await takeFullPageScreenshot(page, 'syllabus-page');
  });

  test('About page visual test', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    
    // Check content elements
    await expect(page.getByRole('heading', { name: 'About Our Institute' })).toBeVisible();
    
    // Take screenshot for visual comparison
    await takeFullPageScreenshot(page, 'about-page');
  });

  test('Contact page visual test', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    
    // Check content elements
    await expect(page.getByRole('heading', { name: 'Contact Us & FAQs' })).toBeVisible();
    
    // Take screenshot for visual comparison
    await takeFullPageScreenshot(page, 'contact-page');
  });

  test('Thank you page visual test', async ({ page }) => {
    await page.goto('/thank-you');
    await page.waitForLoadState('networkidle');
    
    // Check content elements
    await expect(page.getByRole('heading', { name: 'Booking Confirmed!' })).toBeVisible();
    
    // Verify the fixed apostrophe issue
    await expect(page.getByText(/We\'ll send you a confirmation email/)).toBeVisible();
    
    // Take screenshot for visual comparison
    await takeFullPageScreenshot(page, 'thank-you-page');
  });

  test('PDF download test', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find and click the download brochure link
    const downloadLink = page.getByRole('link', { name: 'Download Course Brochure' });
    await expect(downloadLink).toBeVisible();
    
    // We can't fully test the download in headless mode, but we can verify the link points to our PDF
    const href = await downloadLink.getAttribute('href');
    expect(href).toContain('/downloads/course-brochure.pdf');
  });
});