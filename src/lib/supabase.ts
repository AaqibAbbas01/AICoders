import { createClient } from '@supabase/supabase-js';

// These values should be stored in environment variables in production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mlmfukvysqyvgdxcmsmj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbWZ1a3Z5c3F5dmdkeGNtc21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTg5MTMsImV4cCI6MjA2MDgzNDkxM30.lIfmxnWsg-dB04iIK1TwKUbtfwpKbyqqxVtFknffmuw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 