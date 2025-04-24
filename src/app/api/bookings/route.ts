import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use direct values for stability in production (would normally use env vars)
const supabaseUrl = 'https://mlmfukvysqyvgdxcmsmj.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbWZ1a3Z5c3F5dmdkeGNtc21qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTI1ODkxMywiZXhwIjoyMDYwODM0OTEzfQ.9AP7AfzKXY4VDL7CP49-vBJdXH9X9c0CjUUV_3pBN8g';

// Use the service role client that bypasses RLS
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log('API received booking request with data:', body);
    console.log('API called for booking submission');
    
    try {
      // Insert the booking data into Supabase with correct column names (all lowercase)
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          { 
            name: body.fullName,
            email: body.email,
            phonenumber: body.phoneNumber, // Note: lowercase column name
            preferreddate: body.preferredDate, // Note: lowercase column name
            message: body.message,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (error) {
        console.error('Supabase error details:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }
      
      console.log('Booking saved successfully:', data);
      return NextResponse.json({ success: true, data }, { status: 201 });
    } catch (supabaseError) {
      console.error('Detailed Supabase error:', supabaseError);
      return NextResponse.json({ 
        success: false, 
        error: 'Supabase operation failed',
        details: supabaseError instanceof Error ? supabaseError.message : String(supabaseError)
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 