import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

export interface BlogPost {
  slug: string;
  img: string;
  tags: string[];
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "myths-about-ai-voice-in-hospitality",
    img: blog1,
    tags: ["AI & Hospitality", "Industry Trends"],
    title: "Myths About AI Voice in Hospitality (And Why They're Costing You Money in 2026)",
    excerpt: "AI voice assistants are becoming more common in hotels and restaurants. But many business owners still hesitate — not because the technology doesn't work, but because of outdated assumptions...",
    date: "February 19, 2026",
    content: `AI voice assistants are becoming more common in hotels and restaurants. But many business owners still hesitate. Not because the technology doesn't work, but because of outdated assumptions. Let's break down the three biggest myths we hear from hospitality teams.

## Myth №1 — "AI sounds robotic"

A few years ago, voice systems often sounded mechanical, as if they were simply reading from a script, which made conversations feel stiff and unnatural. Today's AI voice assistants operate very differently. They understand natural speech, handle pauses and interruptions smoothly, adapt to different accents, and respond in a human-like tone. The objective is no longer to imitate a machine delivering information, but to communicate like a well-trained employee — calm, clear, and professional in every interaction.

## Myth №2 — "Connecting it to my booking system will be a nightmare"

Technology only creates real value when it integrates properly into your existing systems. A serious AI voice assistant does more than answer basic questions — it connects directly to your booking system, checks availability in real time, confirms reservations, updates bookings, and sends confirmations automatically. It doesn't just hold a conversation; it completes the transaction. That is the difference between a simple chatbot and a true revenue tool.

## Myth №3 — "AI is here to replace my team"

This is the most common misconception. AI is not designed to replace hospitality staff. It is designed to remove repetitive work. Every day, teams answer the same routine questions: What time is check-in? Is there parking? Do you have a sauna? Can you confirm my reservation? These calls matter, but they do not require human empathy or complex judgment.

When AI handles these predictable interactions, your team can focus on guests at the front desk, upselling upgrades, resolving real issues, and creating memorable experiences. AI reduces burnout, but it does not replace hospitality.`,
  },
  {
    slug: "svara-ai-the-batman-of-your-night-shift",
    img: blog2,
    tags: ["AI & Hospitality"],
    title: "SVARA AI — The Batman of Your Night Shift",
    excerpt: "At 2:23 AM, your front desk is quiet. Your team has gone home. The phone rings. If no one answers, that call doesn't disappear — it turns into lost revenue...",
    date: "February 19, 2026",
    content: `At 2:23 AM, your front desk is quiet.

Your team has gone home.

The phone rings.

If no one answers, that call doesn't disappear.

It turns into lost revenue. A high-intent guest, unable to reach you, books elsewhere or postpones the decision entirely. Margin disappears, guest ownership is never established, and long-term loyalty is lost before it even begins.

SVARA AI prevents that outcome by answering instantly, checking live availability, completing the reservation directly in your system, and sending confirmation without delay — protecting revenue that would otherwise slip away simply because the call came after hours.

SVARA AI does not replace your team.

It protects them.`,
  },
  {
    slug: "why-its-high-time-to-adopt-ai-in-your-hotel",
    img: blog3,
    tags: ["Industry Trends", "AI & Hospitality"],
    title: "Why It's High Time to Adopt AI in Your Hotel?",
    excerpt: "The real question is not whether AI will reshape hospitality. It's whether your hotel will lead, or be pushed...",
    date: "February 19, 2026",
    content: `The real question is not whether AI will reshape hospitality. It's whether your hotel will lead, or be pushed.

First of all, AI unlocks capabilities that were simply impossible a few years ago. Imagine being able to speak every language fluently. Not just English, but Finnish, Russian, German, Spanish, and beyond. Not with hesitation. Not with scripts. But naturally. Language barriers disappear. International guests feel understood immediately. Conversion rates increase because comfort increases.

The European AI market is expanding rapidly. Investment, adoption, and regulation are accelerating simultaneously. Hotels that adopt early gain learning curves, data advantages, and operational refinement before competitors even begin. Late adoption creates pressure. Early adoption creates leverage.

AI is no longer a futuristic add-on. It is becoming part of the baseline expectation in guest communication. "High time" does not mean "trendy" — it means strategic timing. The hotels that adopt AI now will not just automate tasks — they will expand capability, protect margin, and position themselves ahead of the curve.`,
  },
];
