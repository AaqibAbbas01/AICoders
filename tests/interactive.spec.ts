import { test, expect } from '@playwright/test';

test.describe('Interactive User Flows', () => {
  test('Complete booking flow with form submission', async ({ page }) => {
    // Start at home page
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Navigate to booking page through the main CTA button
    await page.getByRole('link', { name: 'Book a Slot' }).first().click();
    await expect(page).toHaveURL('/book-slot');
    
    // Fill out the booking form
    await page.getByLabel('Full Name *').fill('Test Automation User');
    await page.getByLabel('Email Address *').fill('automated-test@example.com');
    
    // Select a date (first available date)
    const calendarDay = page.getByRole('button', { name: /\d+/ }).first();
    await calendarDay.click();
    
    // Select timezone
    await page.getByLabel('Time Zone *').selectOption('GMT+00:00');
    
    // Add special requirements
    await page.getByLabel('Special Requirements (Optional)').fill('Automated test special requirements');
    
    // Take a screenshot before submission
    await page.screenshot({ path: './screenshots/before-booking-submission.png' });
    
    // Submit the form
    await page.getByRole('button', { name: 'Book Your Slot' }).click();
    
    // Verify redirect to thank you page
    await expect(page).toHaveURL('/thank-you');
    await expect(page.getByRole('heading', { name: 'Booking Confirmed!' })).toBeVisible();
    
    // Take a screenshot of confirmation page
    await page.screenshot({ path: './screenshots/booking-confirmation.png' });
  });
  
  test('Navigation and responsive menu test', async ({ page }) => {
    // Start at home page
    await page.goto('/');
    
    // Test desktop navigation
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Syllabus' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    
    // Navigate through all main pages
    await page.getByRole('link', { name: 'Syllabus' }).click();
    await expect(page).toHaveURL('/syllabus');
    await expect(page.getByRole('heading', { name: 'Comprehensive Course Syllabus' })).toBeVisible();
    
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole('heading', { name: 'About Our Institute' })).toBeVisible();
    
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: 'Contact Us & FAQs' })).toBeVisible();
    
    // Go back to home
    await page.getByRole('link', { name: 'AICoders' }).click();
    await expect(page).toHaveURL('/');
    
    // Take a screenshot of desktop navigation
    await page.screenshot({ path: './screenshots/desktop-navigation.png' });
    
    // Test responsive design - resize to mobile width
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Check for mobile menu button
    const menuButton = page.getByRole('button', { name: 'Toggle Menu' });
    await expect(menuButton).toBeVisible();
    
    // Open mobile menu
    await menuButton.click();
    
    // Take a screenshot of mobile menu
    await page.screenshot({ path: './screenshots/mobile-menu-open.png' });
    
    // Navigate using mobile menu
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
  });
  
  test('Contact form submission flow', async ({ page }) => {
    // Navigate to contact page
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    
    // Fill out contact form
    await page.getByLabel('Full Name *').fill('Contact Form User');
    await page.getByLabel('Email Address *').fill('contact-test@example.com');
    await page.getByLabel('Message *').fill('This is an automated test message sent through the contact form. Please ignore.');
    
    // Take screenshot before submission
    await page.screenshot({ path: './screenshots/contact-form-filled.png' });
    
    // Submit form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Check for success message
    await expect(page.getByText('Thank You!')).toBeVisible();
    
    // Take screenshot after submission
    await page.screenshot({ path: './screenshots/contact-form-submitted.png' });
  });
  
  test('FAQ interactions', async ({ page }) => {
    // Navigate to contact page with FAQs
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    
    // Find all FAQ items
    const faqItems = page.locator('.faq-item');
    const count = await faqItems.count();
    
    // Verify we have FAQs
    expect(count).toBeGreaterThan(0);
    
    // Click each FAQ to expand it and take a screenshot
    for (let i = 0; i < count; i++) {
      // Click the FAQ header to expand
      await faqItems.nth(i).locator('button').click();
      
      // Wait for animation
      await page.waitForTimeout(300);
      
      // Take screenshot of expanded FAQ
      await page.screenshot({ path: `./screenshots/faq-expanded-${i+1}.png` });
    }
  });
}); 