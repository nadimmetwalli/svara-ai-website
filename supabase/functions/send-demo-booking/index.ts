import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const NOTIFICATION_EMAIL = "info@svara-ai.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { name, email, phone, business_type, locations, challenge } = await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

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
      throw new Error(`Resend API failed [${notificationRes.status}]: ${JSON.stringify(notificationData)}`);
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
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
