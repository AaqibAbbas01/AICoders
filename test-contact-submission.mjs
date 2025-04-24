// Script to test contact form submission
import fetch from 'node-fetch';

async function submitTestContact() {
  console.log('Simulating a contact form submission...');
  
  try {
    // Create test contact data
    const contactData = {
      name: 'Contact Test User',
      email: 'contact.test@example.com',
      subject: 'Test Contact Message',
      message: 'This is a test contact message submitted via API'
    };
    
    console.log('Submitting contact data:', contactData);
    
    // Send API request
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    
    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response data:', result);
    
    if (response.ok) {
      console.log('✅ Test contact submitted successfully!');
    } else {
      console.log('❌ Failed to submit test contact. See error above.');
    }
  } catch (error) {
    console.error('Error submitting test contact:', error);
  }
}

submitTestContact(); 