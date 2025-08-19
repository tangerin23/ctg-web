import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
export const runtime = "nodejs";
export async function POST(req: Request) {
try {
   const body = await req.json().catch(() => ({} as Record<string, unknown>));
   const prompt = String((body as Record<string, unknown>)?.prompt ?? "").trim();

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
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "UNKNOWN_ERROR";
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
