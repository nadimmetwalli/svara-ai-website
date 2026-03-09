CREATE TABLE public.rate_limit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.rate_limit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public access" ON public.rate_limit_log FOR ALL TO public USING (false);

CREATE INDEX idx_rate_limit_email_created ON public.rate_limit_log (email, created_at);