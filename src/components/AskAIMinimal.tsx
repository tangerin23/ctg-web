'use client';
import { useState } from 'react';

export default function AskAIMinimal() {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function ask() {
    setLoading(true);
    setAnswer('');
    try {
      const r = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await r.json();
      if (!data.ok) throw new Error(data.error || 'Request failed');
      setAnswer(data.text || '');
    } catch (e: any) {
      setAnswer('❌ ' + (e.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <input
        className="border px-3 py-2 w-full"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="聞きたいことを入力"
      />
      <button
        onClick={ask}
        disabled={loading || !prompt}
        className="rounded bg-black text-white px-4 py-2 disabled:opacity-50"
      >
        {loading ? '生成中…' : 'Ask AI'}
      </button>
      {answer && <pre className="whitespace-pre-wrap">{answer}</pre>}
    </div>
  );
}
