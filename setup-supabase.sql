-- Create the bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  phoneNumber text NOT NULL,
  preferredDate date NOT NULL,
  message text,
  created_at timestamp with time zone DEFAULT now()
);

-- Create an index on the email field for faster lookups
CREATE INDEX IF NOT EXISTS bookings_email_idx ON public.bookings (email);

-- Create the contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Create an index on the email field for faster lookups
CREATE INDEX IF NOT EXISTS contacts_email_idx ON public.contacts (email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policies to restrict access to authenticated users
CREATE POLICY "Allow authenticated access to bookings" 
  ON public.bookings FOR ALL 
  TO authenticated 
  USING (true);

CREATE POLICY "Allow authenticated access to contacts" 
  ON public.contacts FOR ALL 
  TO authenticated 
  USING (true);

-- Grant access to the anon and authenticated roles
GRANT ALL ON public.bookings TO authenticated;
GRANT ALL ON public.contacts TO authenticated;
GRANT ALL ON public.bookings TO service_role;
GRANT ALL ON public.contacts TO service_role; 