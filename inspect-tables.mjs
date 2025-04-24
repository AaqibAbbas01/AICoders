// Script to inspect table structure in Supabase
import { createClient } from '@supabase/supabase-js';

// Use the direct values for testing
const supabaseUrl = 'https://mlmfukvysqyvgdxcmsmj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbWZ1a3Z5c3F5dmdkeGNtc21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTg5MTMsImV4cCI6MjA2MDgzNDkxM30.lIfmxnWsg-dB04iIK1TwKUbtfwpKbyqqxVtFknffmuw';

console.log('Using Supabase URL:', supabaseUrl);
console.log('Using Anon Key:', supabaseAnonKey.substring(0, 10) + '...');

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function listTables() {
  try {
    console.log('Trying to list all tables in the database...');
    
    // Try to list all tables in the public schema
    const { data, error } = await supabase
      .from('pg_catalog.pg_tables')
      .select('*')
      .eq('schemaname', 'public');
    
    if (error) {
      console.error('Error listing tables:', error);
    } else {
      console.log('Tables in the public schema:');
      console.log(JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error('Error listing tables:', error);
  }
  
  // Let's try a simpler approach - trying to query the bookings table
  try {
    console.log('Checking if bookings table exists...');
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('Error accessing bookings table:', error);
    } else {
      console.log('Bookings table exists and has the following structure:');
      // If data has entries, show the first one to understand the structure
      if (data && data.length > 0) {
        console.log('Sample row structure:', Object.keys(data[0]));
      } else {
        console.log('No data in bookings table, but table exists');
      }
    }
  } catch (error) {
    console.error('Error checking bookings table:', error);
  }
}

listTables(); 