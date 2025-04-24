// Script to test direct insertion into Supabase
import { createClient } from '@supabase/supabase-js';

// Use the direct values for testing
const supabaseUrl = 'https://mlmfukvysqyvgdxcmsmj.supabase.co';
// Use the service role key which bypasses RLS policies
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbWZ1a3Z5c3F5dmdkeGNtc21qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTI1ODkxMywiZXhwIjoyMDYwODM0OTEzfQ.9AP7AfzKXY4VDL7CP49-vBJdXH9X9c0CjUUV_3pBN8g';

console.log('Using service role key to bypass RLS');
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testDirectInsert() {
  try {
    console.log('Testing direct insertion with correct column names (all lowercase)...');
    
    // Create test booking data with lowercase column names
    const bookingData = {
      name: 'Direct Test User',
      email: 'direct.test@example.com',
      phonenumber: '+1 (555) 987-6543',
      preferreddate: new Date().toISOString().split('T')[0], // Today's date
      message: 'This is a test booking inserted directly',
      created_at: new Date().toISOString()
    };
    
    console.log('Inserting booking data:', bookingData);
    
    // Insert directly into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([bookingData]);
    
    if (error) {
      console.error('❌ Error inserting data:', error);
    } else {
      console.log('✅ Data inserted successfully:', data);
    }
    
    // Query the bookings table to verify the insertion
    const { data: bookings, error: queryError } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);
    
    if (queryError) {
      console.error('Error querying bookings:', queryError);
    } else {
      console.log('Recent bookings after insertion:');
      console.log(JSON.stringify(bookings, null, 2));
    }
  } catch (error) {
    console.error('Unexpected error during direct insertion test:', error);
  }
}

testDirectInsert(); 