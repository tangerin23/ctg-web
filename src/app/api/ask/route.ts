// src/app/api/ask/route.ts
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const runtime = "nodejs"; // まずは安定の Node 実行

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const prompt = (body?.prompt ?? "").toString().trim();

    if (!prompt) {
      return Response.json({ ok: false, error: "EMPTY_PROMPT" }, { status: 400 });
    }
    if (!process.env.OPENAI_API_KEY) {
      return Response.json({ ok: false, error: "NO_OPENAI_API_KEY" }, { status: 500 });
    }

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt,
    });

    return Response.json({ ok: true, text });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err?.message ?? "UNKNOWN_ERROR" },
      { status: 500 }
    );
  }
}