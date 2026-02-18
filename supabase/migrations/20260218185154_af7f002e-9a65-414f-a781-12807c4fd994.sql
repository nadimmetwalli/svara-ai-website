
-- Create table for demo bookings
CREATE TABLE public.demo_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_type TEXT,
  locations TEXT,
  challenge TEXT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Anyone can submit a demo booking"
  ON public.demo_bookings
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated admin can read (no public reads)
CREATE POLICY "No public reads"
  ON public.demo_bookings
  FOR SELECT
  USING (false);
