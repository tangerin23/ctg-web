/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

export const runtime = "nodejs";

// ヘルスチェック（キーが入っているかだけ返す。値は絶対に出さない）
export async function GET() {
  return Response.json({
    ok: true,
    runtime,
    hasKey: Boolean(
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? process.env.GEMINI_API_KEY
    ),
    env: process.env.VERCEL_ENV ?? "unknown",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const prompt = body?.prompt?.toString?.() ?? "";

    if (!prompt) {
      return Response.json({ ok: false, error: "NO_PROMPT" }, { status: 400 });
    }

    // どちらか入っていればOK
    const apiKey =
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ ok: false, error: "NO_GEMINI_KEY" }, { status: 500 });
    }

    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

    const r = await fetch(`${url}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return Response.json({ ok: false, error: err || r.statusText }, { status: 500 });
    }

    const data = await r.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      // 念のため parts 複数のとき連結
      (data?.candidates?.[0]?.content?.parts || [])
        .map((p: any) => p?.text)
        .filter(Boolean)
        .join("") ??
      "";

    return Response.json({ ok: true, text });
  } catch (e: any) {
    return Response.json({ ok: false, error: e?.message ?? "UNKNOWN" }, { status: 500 });
  }
}
