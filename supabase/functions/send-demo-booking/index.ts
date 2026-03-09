import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const NOTIFICATION_EMAIL = "info@svara-ai.com";
const RATE_LIMIT_WINDOW_MINUTES = 60;
const RATE_LIMIT_MAX = 3;

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
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    const escHtml = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

    const raw = await req.json();
    const name = escHtml(String(raw.name || ""));
    const email = String(raw.email || "").trim().toLowerCase();
    const phone = escHtml(String(raw.phone || ""));
    const business_type = escHtml(String(raw.business_type || ""));
    const locations = escHtml(String(raw.locations || ""));
    const challenge = escHtml(String(raw.challenge || ""));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "A valid name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Rate limiting: max N submissions per email in the time window
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("rate_limit_log")
      .select("*", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", windowStart);

    if (countError) {
      console.error("Rate limit check failed:", countError);
    } else if ((count ?? 0) >= RATE_LIMIT_MAX) {
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Log this submission for rate limiting
    await supabaseAdmin.from("rate_limit_log").insert({ email });

    // Send notification email to team
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SVARA Demo <onboarding@resend.dev>",
        to: [NOTIFICATION_EMAIL],
        subject: `New Demo Booking: ${name}`,
        html: `
          <h2>New Demo Booking Request</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Business Type</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${business_type || "Not specified"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Locations</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${locations || "Not specified"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Challenge</td><td style="padding: 8px;">${challenge || "Not specified"}</td></tr>
          </table>
        `,
      }),
    });

    const notificationData = await notificationRes.json();
    if (!notificationRes.ok) {
      console.error(`Resend API failed [${notificationRes.status}]:`, notificationData);
      throw new Error("Email sending failed");
    }

    // Send confirmation email to the prospect
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SVARA <onboarding@resend.dev>",
        to: [email],
        subject: "Your SVARA Demo is Booked!",
        html: `
          <h2>Thanks for booking a demo, ${name}!</h2>
          <p>We've received your request and our team will reach out to you shortly to schedule your personalized demo.</p>
          <p>In the meantime, feel free to reply to this email if you have any questions.</p>
          <br/>
          <p>Best regards,<br/>The SVARA Team</p>
        `,
      }),
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error sending demo booking email:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
