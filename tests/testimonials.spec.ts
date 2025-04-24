import { test, expect } from '@playwright/test';

test.describe('Testimonials Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage where testimonials are displayed
    await page.goto('/');
  });

  test('should display testimonials section with correct heading', async ({ page }) => {
    // Check if testimonials section exists and has the correct heading
    await expect(page.locator('section').filter({ hasText: 'What Our Students Say' })).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: 'What Our Students Say' })).toBeVisible();
  });

  test('should display testimonial cards with correct content', async ({ page }) => {
    // Wait for testimonials section to be visible
    await expect(page.locator('section').filter({ hasText: 'What Our Students Say' })).toBeVisible();
    
    // The component shows one testimonial at a time, check the visible one
    const visibleTestimonial = page.locator('.whitespace-nowrap > div').first();
    await expect(visibleTestimonial).toBeVisible();
    
    // Verify testimonial contains essential elements (quote and name)
    await expect(page.locator('blockquote')).toBeVisible();
    await expect(page.locator('.font-mono.font-bold.text-xl')).toBeVisible();
    
    // Verify at least one of the known testimonial authors is present
    const authors = ['Sarah Johnson', 'Michael Chen', 'Priya Patel'];
    await expect(
      page.locator('.font-mono.font-bold.text-xl').filter({ hasText: new RegExp(authors.join('|')) })
    ).toBeVisible();
  });

  test('should navigate to next testimonial when clicking next button', async ({ page }) => {
    // Wait for testimonials section to be visible
    await expect(page.locator('section').filter({ hasText: 'What Our Students Say' })).toBeVisible();
    
    // Get the currently visible testimonial content
    const initialQuote = await page.locator('blockquote').textContent();
    
    // Click the next button (button with right arrow SVG)
    await page.locator('button[aria-label="Next testimonial"]').click();
    
    // Wait for animation to complete
    await page.waitForTimeout(600);
    
    // Get the new testimonial content
    const newQuote = await page.locator('blockquote').textContent();
    
    // Verify that the testimonial has changed
    expect(newQuote).not.toEqual(initialQuote);
  });

  test('should navigate to specific testimonial when clicking indicator button', async ({ page }) => {
    // Wait for testimonials section to be visible
    await expect(page.locator('section').filter({ hasText: 'What Our Students Say' })).toBeVisible();
    
    // Click the third indicator dot (index 2)
    const indicators = page.locator('.flex.space-x-2 button');
    const count = await indicators.count();
    
    if (count >= 3) {
      // Get the currently visible testimonial content
      const initialQuote = await page.locator('blockquote').textContent();
      
      // Click the third indicator
      await indicators.nth(2).click();
      
      // Wait for animation to complete
      await page.waitForTimeout(600);
      
      // Get the new testimonial content
      const newQuote = await page.locator('blockquote').textContent();
      
      // Verify that the testimonial has changed
      expect(newQuote).not.toEqual(initialQuote);
    } else {
      // Skip this test if there aren't at least 3 indicators
      test.skip();
    }
  });
}); 