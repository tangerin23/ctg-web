// @ts-nocheck
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return Response.json({ ok: false, error: "NO_PROMPT" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return Response.json({ ok: false, error: "NO_GEMINI_KEY" }, { status: 500 });
    }

    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
    const body = {
      contents: [{ parts: [{ text: String(prompt) }]}],
    };

    const r = await fetch(`${url}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!r.ok) {
      const err = await r.text();
      return Response.json({ ok: false, error: err || r.statusText }, { status: 500 });
    }

    const data = await r.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    return Response.json({ ok: true, text });
  } catch (e: any) {
    return Response.json({ ok: false, error: e?.message ?? "UNKNOWN" }, { status: 500 });
  }
}