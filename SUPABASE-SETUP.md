# Supabase Database Setup and Testing

This document explains how to set up your Supabase database for the Tech Institute website and verify that data is being saved correctly.

## Initial Setup

1. **Create a Supabase Project**
   - Go to [Supabase](https://app.supabase.com)
   - Sign up or log in
   - Create a new project
   - Choose a name for your project
   - Set a secure database password
   - Choose a region close to your users
   - Wait for your database to be initialized

2. **Get Your API Credentials**
   - After your project is created, go to Project Settings > API
   - You'll need:
     - Project URL (e.g., `https://abcdefghijklm.supabase.co`)
     - `anon` public key (begins with `eyJh...`)

3. **Set Up Environment Variables**
   - Create a `.env.local` file in your project root
   - Add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```
   - The service role key can be found in the same API section

## Database Schema Setup

1. **Run the SQL Script**
   - Go to the SQL Editor in your Supabase dashboard
   - Copy the contents of `setup-supabase.sql` from this project
   - Run the SQL script to create the necessary tables and permissions

## Testing Data Submission

### Testing the Contact Form:

1. Start your local development server:
   ```
   npm run dev
   ```

2. Navigate to the Contact page
   - Fill out the contact form with test data
   - Submit the form
   - You should see a success message

3. Verify Data in Supabase:
   - Go to your Supabase dashboard
   - Navigate to Table Editor > contacts
   - Check if your submission appears in the table

### Testing the Booking Form:

1. Navigate to the Book a Slot page
   - Fill out the booking form with test data
   - Submit the form
   - You should be redirected to the thank-you page

2. Verify Data in Supabase:
   - Go to your Supabase dashboard
   - Navigate to Table Editor > bookings
   - Check if your submission appears in the table

## Running the Data Check Script

To check your database contents, you can run:

```
node check-supabase-data.mjs
```

Before running this script, make sure your `.env.local` file contains the correct Supabase credentials.

## Troubleshooting

1. **Form Submissions Not Appearing in Database**
   - Check your browser console for errors
   - Verify your Supabase credentials in `.env.local`
   - Check the server logs for any error messages
   - Ensure the field names in your form match the expected field names in the API routes

2. **Authentication Errors**
   - Ensure your API keys have the correct permissions
   - Check that Row Level Security (RLS) policies are properly configured

3. **Network Errors**
   - Check if your application can reach the Supabase API
   - Verify that your Supabase instance is up and running 