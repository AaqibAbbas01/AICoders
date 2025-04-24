// Script to check data in Supabase tables
import { createClient } from '@supabase/supabase-js';

// Use the direct values for testing
const supabaseUrl = 'https://mlmfukvysqyvgdxcmsmj.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbWZ1a3Z5c3F5dmdkeGNtc21qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTI1ODkxMywiZXhwIjoyMDYwODM0OTEzfQ.9AP7AfzKXY4VDL7CP49-vBJdXH9X9c0CjUUV_3pBN8g';

console.log('Using Supabase URL:', supabaseUrl);
console.log('Using Service Role Key to bypass RLS');

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkData() {
  try {
    console.log('Checking data in Supabase...');
    
    // Check bookings table
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);
    
    if (bookingsError) {
      console.error('Error fetching bookings:', bookingsError);
    } else {
      console.log('Recent bookings (most recent 10):');
      console.log(JSON.stringify(bookings, null, 2));
      console.log(`Total bookings found: ${bookings.length}`);
    }
    
    // Check contacts table
    const { data: contacts, error: contactsError } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);
    
    if (contactsError) {
      console.error('Error fetching contacts:', contactsError);
    } else {
      console.log('\nRecent contact form submissions (most recent 10):');
      console.log(JSON.stringify(contacts, null, 2));
      console.log(`Total contact submissions found: ${contacts.length}`);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

checkData(); 