import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Use direct values for stability in production (would normally use env vars)
const supabaseUrl = 'https://mlmfukvysqyvgdxcmsmj.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbWZ1a3Z5c3F5dmdkeGNtc21qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTI1ODkxMywiZXhwIjoyMDYwODM0OTEzfQ.9AP7AfzKXY4VDL7CP49-vBJdXH9X9c0CjUUV_3pBN8g';

// Use the service role client that bypasses RLS
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log('Contact form submission received:', { name, email, subject });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    try {
      // Store the data in Supabase using the correct column names
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name,
            email,
            subject,
            message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        console.error('Error inserting contact data:', error);
        return NextResponse.json(
          { error: 'Failed to save contact information', details: error.message },
          { status: 500 }
        );
      }

      console.log('Contact form submitted successfully');
      // Return success response
      return NextResponse.json(
        { success: true, message: 'Contact form submitted successfully' },
        { status: 201 }
      );
    } catch (supabaseError) {
      console.error('Supabase operation error:', supabaseError);
      return NextResponse.json(
        { 
          error: 'Database operation failed', 
          details: supabaseError instanceof Error ? supabaseError.message : String(supabaseError)
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 