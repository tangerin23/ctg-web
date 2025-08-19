// src/components/AskAIMinimal.tsx
"use client";
import { useState } from "react";

export default function AskAIMinimal() {
  const [q, setQ] = useState("自己紹介して");
  const [a, setA] = useState("");

  async function ask() {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: q }),
    });
    const data = await res.json();
    setA(data.ok ? data.text : `ERROR: ${data.error}`);
  }

  return (
    <div className="space-y-2">
      <input
        className="px-3 py-2 rounded bg-white/10 w-full"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="質問を入力"
      />
      <button onClick={ask} className="px-3 py-2 rounded bg-sky-500/90 text-black">
        Ask
      </button>
      <pre className="whitespace-pre-wrap text-white/80">{a}</pre>
    </div>
  );
}
