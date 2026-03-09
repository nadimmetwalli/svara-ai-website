import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const BOT_USER_AGENTS = [
  "bot", "crawl", "spider", "scrape", "curl", "wget", "python-requests",
  "httpclient", "java/", "go-http", "perl", "ruby", "phantom", "headless",
  "selenium", "puppeteer", "playwright",
];

function isSuspiciousUA(req: Request): boolean {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();
  if (!ua || ua.length < 10) return true;
  return BOT_USER_AGENTS.some((bot) => ua.includes(bot));
}

const RATE_LIMIT_WINDOW_MINUTES = 30;
const RATE_LIMIT_MAX = 5;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Block suspicious user agents
  if (isSuspiciousUA(req)) {
    return new Response(
      JSON.stringify({ error: "Forbidden" }),
      { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const SVARA_CALL_API_KEY = Deno.env.get("SVARA_CALL_API_KEY");
    if (!SVARA_CALL_API_KEY) {
      throw new Error("SVARA_CALL_API_KEY is not configured");
    }

    const { phone } = await req.json();

    if (!phone || !/^\+[1-9]\d{1,14}$/.test(phone)) {
      return new Response(
        JSON.stringify({ error: "A valid phone number in E.164 format is required (e.g. +12223334444)" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Rate limiting by phone number
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("rate_limit_log")
      .select("*", { count: "exact", head: true })
      .eq("email", phone)
      .gte("created_at", windowStart);

    if ((count ?? 0) >= RATE_LIMIT_MAX) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    await supabaseAdmin.from("rate_limit_log").insert({ email: phone });

    const response = await fetch("https://svara-production.up.railway.app/api/call-me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": SVARA_CALL_API_KEY,
      },
      body: JSON.stringify({ phone }),
    });

    const data = await response.json();

    return new Response(
      JSON.stringify(data),
      { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error in call-me function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
