// Script to test booking form submission
import fetch from 'node-fetch';

async function submitTestBooking() {
  console.log('Simulating a booking form submission...');
  
  try {
    // Create test booking data
    const bookingData = {
      fullName: 'Test User',
      email: 'test.user@example.com',
      phoneNumber: '+918178199664',
      preferredDate: new Date().toISOString().split('T')[0], // Today's date
      message: 'This is a test booking submitted via API'
    };
    
    console.log('Submitting booking data:', bookingData);
    
    // Send API request
    const response = await fetch('http://localhost:3000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    
    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response data:', result);
    
    if (response.ok) {
      console.log('✅ Test booking submitted successfully!');
    } else {
      console.log('❌ Failed to submit test booking. See error above.');
    }
  } catch (error) {
    console.error('Error submitting test booking:', error);
  }
}

submitTestBooking(); 