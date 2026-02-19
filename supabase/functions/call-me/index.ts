import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
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
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
