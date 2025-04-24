// Script to test simple insertion with minimal fields
import { createClient } from '@supabase/supabase-js';

// Use the direct values for testing
const supabaseUrl = 'https://mlmfukvysqyvgdxcmsmj.supabase.co';
// Use the service role key which bypasses RLS policies
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbWZ1a3Z5c3F5dmdkeGNtc21qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTI1ODkxMywiZXhwIjoyMDYwODM0OTEzfQ.9AP7AfzKXY4VDL7CP49-vBJdXH9X9c0CjUUV_3pBN8g';

console.log('Using service role key instead of anon key (bypasses RLS)');
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testSimpleInsert() {
  try {
    console.log('Testing simple insert with only required fields...');
    
    // Create minimal booking data with only name and email
    const minimalBookingData = {
      name: 'Minimal Test',
      email: 'minimal.test@example.com'
    };
    
    console.log('Inserting minimal data:', minimalBookingData);
    
    // Try inserting with minimal data
    const { data, error } = await supabase
      .from('bookings')
      .insert([minimalBookingData]);
    
    if (error) {
      console.error('❌ Error inserting data:', error);
      
      // If we get a 'not-null constraint' error, it will tell us which fields are required
      if (error.message && error.message.includes('not-null constraint')) {
        console.log('The error suggests which fields are required');
      }
    } else {
      console.log('✅ Data inserted successfully:', data);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

testSimpleInsert(); 