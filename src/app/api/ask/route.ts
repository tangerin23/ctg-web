// src/app/api/ask/route.ts
export const runtime = "edge"; // 早い＆お手軽

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json().catch(() => ({} as any));
    if (!prompt || typeof prompt !== "string") {
      return Response.json({ ok: false, error: "NO_PROMPT" }, { status: 400 });
    }

    const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!key) {
      return Response.json({ ok: false, error: "NO_GEMINI_KEY" }, { status: 500 });
    }

    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent" +
      `?key=${encodeURIComponent(key)}`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }]}],
      }),
    });

    if (!r.ok) {
      const t = await r.text();
      return Response.json({ ok: false, error: `GEMINI_HTTP_${r.status}`, details: t }, { status: 500 });
    }

    const data = await r.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      data?.candidates?.[0]?.content?.parts?.map((p: any) => p?.text).filter(Boolean).join("\n") ??
      "";

    return Response.json({ ok: true, text });
  } catch (e: any) {
    return Response.json({ ok: false, error: "SERVER_ERROR", details: String(e?.message ?? e) }, { status: 500 });
  }
}