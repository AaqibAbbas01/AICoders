import { test, expect } from '@playwright/test';

test.describe('Thank You Page Tests', () => {
  test('should display the thank you page correctly', async ({ page }) => {
    // Navigate to the thank you page directly
    await page.goto('/thank-you');
    
    // Check that the thank you page loads with the correct title
    await expect(page.locator('h1')).toContainText('Booking Confirmed!');
    
    // Check that the confirmation message is displayed with proper apostrophe
    const confirmationMessage = page.locator('p', { hasText: "We'll contact you" });
    await expect(confirmationMessage).toBeVisible();
    
    // The text should render correctly with the apostrophe
    const messageText = await confirmationMessage.textContent();
    expect(messageText).toContain("We'll contact you shortly");
    
    // Check for the Download Course Brochure button with download icon
    const downloadButton = page.getByRole('link', { name: /Download Course Brochure/i });
    await expect(downloadButton).toBeVisible();
    expect(await downloadButton.getAttribute('href')).toBe('/downloads/course-brochure.pdf');
    expect(await downloadButton.getAttribute('download')).not.toBeNull();
    
    // Check that it has the cyan border styling
    const downloadButtonClass = await downloadButton.getAttribute('class');
    expect(downloadButtonClass).toContain('border-cyan-500');
    expect(downloadButtonClass).toContain('text-cyan-400');
    
    // Check for the download icon
    const downloadIcon = downloadButton.locator('svg').first();
    await expect(downloadIcon).toBeVisible();
    
    // Check for the Return to Home button with arrow icon
    const homeButton = page.getByRole('link', { name: /Return to Home/i });
    await expect(homeButton).toBeVisible();
    expect(await homeButton.getAttribute('href')).toBe('/');
    
    // Check that it has the purple background styling
    const homeButtonClass = await homeButton.getAttribute('class');
    expect(homeButtonClass).toContain('bg-[#5D4FFF]');
    expect(homeButtonClass).toContain('text-white');
    
    // Check for the arrow icon
    const arrowIcon = homeButton.locator('svg').first();
    await expect(arrowIcon).toBeVisible();
    
    // Check for the correct styling using a more reliable selector
    const thankYouCard = page.locator('div.max-w-2xl');
    await expect(thankYouCard).toBeVisible();
    
    // Check the styling of the success icon
    const successIcon = page.locator('.w-20.h-20 svg').first();
    await expect(successIcon).toBeVisible();
    
    // Verify the success icon has the correct color
    await expect(successIcon).toHaveAttribute('class', expect.stringContaining('text-[#00c853]'));
  });
  
  test('navigation from booking form to thank you page works correctly', async ({ page }) => {
    // Start on the booking page
    await page.goto('/book');
    
    // Fill in the form
    await page.fill('#fullName', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#phoneNumber', '1234567890');
    
    // Select a date from the calendar (first available date)
    const availableDateButton = page.locator('.calendar-day').first();
    await availableDateButton.click();
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Verify redirection to thank you page
    await expect(page).toHaveURL('/thank-you');
    
    // Verify the thank you page content
    await expect(page.locator('h1')).toContainText('Booking Confirmed!');
  });
}); 