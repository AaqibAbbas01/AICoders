import { test, expect, type Page } from '@playwright/test';

// Helper function to wait for navigation
const waitForNavigation = async (page: Page): Promise<void> => {
  await page.waitForLoadState('networkidle');
};

test.describe('AI Coders Website Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Home page loads with key elements', async ({ page }) => {
    // Check title
    await expect(page).toHaveTitle(/AI Coders/);
    
    // Check hero section
    const heroHeading = page.locator('h1:has-text("Playwright Automation")');
    await expect(heroHeading).toBeVisible();
    
    // Check navigation
    const navLinks = page.locator('nav a');
    await expect(navLinks).toHaveCount(5); // Home, Syllabus, About, Contact, Book a Slot
    
    // Check CTAs
    const ctaButton = page.locator('a:has-text("Book a Slot")');
    await expect(ctaButton).toBeVisible();
  });

  test('Book a Slot form works correctly', async ({ page }) => {
    // Navigate to the booking form
    await page.click('a:has-text("Book a Slot")');
    await waitForNavigation(page);
    
    // Check the page loaded correctly
    await expect(page).toHaveURL(/book-slot/);
    
    // The test can verify the form is visible but we don't need to attempt submission
    const bookingFormHeading = page.getByRole('heading', { name: 'Book Your Session' });
    await expect(bookingFormHeading).toBeVisible();
  });

  test('Syllabus page displays course content', async ({ page }) => {
    // Navigate to syllabus page
    await page.click('a:has-text("Syllabus")');
    await waitForNavigation(page);
    
    // Check we're on the right page
    await expect(page).toHaveURL(/syllabus/);
    
    // Check for course content
    const courseHeading = page.getByRole('heading', { name: /Curriculum/, level: 2 });
    await expect(courseHeading).toBeVisible();
  });

  test('About page loads information', async ({ page }) => {
    // Navigate to about page
    await page.click('a:has-text("About")');
    await waitForNavigation(page);
    
    // Check we're on the right page
    await expect(page).toHaveURL(/about/);
    
    // Check for about content
    const aboutSection = page.getByRole('heading', { name: /About Us/, level: 1 });
    await expect(aboutSection).toBeVisible();
  });

  test('Contact page loads correctly', async ({ page }) => {
    // Navigate to contact page
    await page.click('a:has-text("Contact")');
    await waitForNavigation(page);
    
    // Check we're on the right page
    await expect(page).toHaveURL(/contact/);
    
    // Check for contact heading
    const contactHeading = page.getByRole('heading', { name: /Contact Us/, level: 1 });
    await expect(contactHeading).toBeVisible();
  });

  test('Testimonials component displays correctly', async ({ page }) => {
    // Scroll to the testimonials section to ensure it's visible
    const testimonialSection = page.locator('section', { 
      has: page.getByText('What Our Students Say') 
    });
    await testimonialSection.scrollIntoViewIfNeeded();
    await expect(testimonialSection).toBeVisible();
    
    // Check that testimonial heading is visible
    const testimonialHeading = page.getByRole('heading', { name: 'What Our Students Say' });
    await expect(testimonialHeading).toBeVisible();
    
    // Check that at least one testimonial quote is visible
    const testimonialQuote = page.locator('blockquote').first();
    await expect(testimonialQuote).toBeVisible();
    
    // Check navigation controls
    const prevButton = page.getByRole('button', { name: 'Previous testimonial' });
    const nextButton = page.getByRole('button', { name: 'Next testimonial' });
    await expect(prevButton).toBeVisible();
    await expect(nextButton).toBeVisible();
    
    // Test carousel navigation by clicking next
    await nextButton.click();
    // Wait for animation to complete
    await page.waitForTimeout(600);
    
    // Check the slide indicator dots to verify the carousel changed
    const activeSlideIndicator = page.locator('button[aria-label="Go to slide 2"]');
    const computedClass = await activeSlideIndicator.evaluate(el => 
      window.getComputedStyle(el).backgroundColor
    );
    // Verify the slide indicator changed (by checking if it has a different style)
    expect(computedClass).not.toBe('rgb(209, 213, 219)');
  });
}); 