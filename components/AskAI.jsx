"use client";

import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  "What are his strongest LLM projects?",
  "Has he done LLM post-training?",
  "What is his ML research about?",
  "Why should we hire him?",
];

export default function AskAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => () => abortRef.current?.abort(), []);

  // Other sections (the brain map) can send a question here with
  // window.dispatchEvent(new CustomEvent("ask-ai", { detail: "question" })).
  const askRef = useRef(null);
  useEffect(() => {
    const onAsk = (e) => askRef.current?.(String(e.detail || ""));
    window.addEventListener("ask-ai", onAsk);
    return () => window.removeEventListener("ask-ai", onAsk);
  }, []);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages]);

  async function ask(text) {
    const question = text.trim().slice(0, 600);
    if (!question || busy) return;

    const history = [...messages, { role: "user", content: question }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    const setAnswer = (content) =>
      setMessages((prev) => [...prev.slice(0, -1), { role: "assistant", content }]);

    const controller = new AbortController();
    abortRef.current = controller;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        setAnswer(data.error || "I'm sorry, something went wrong. Please try again in a moment.");
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setAnswer(answer);
      }
      if (!answer.trim()) setAnswer("Sorry, I couldn't answer that. Please try rephrasing.");
    } catch (err) {
      if (err.name !== "AbortError") setAnswer("I'm sorry, I couldn't reach my AI assistant. Please check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  askRef.current = ask;

  return (
    <div className="ask-box">
      <div className="ask-log" ref={logRef} aria-live="polite">
        {messages.length === 0 ? (
          <p className="ask-empty">
            Ask anything about my experience, projects, skills or research.
            <br />
            Answers come from my CV and project data.
          </p>
        ) : (
          messages.map((m, i) => (
            <div key={i} className={`ask-msg ${m.role === "user" ? "ask-user" : "ask-bot"}`}>
              {m.content || <span className="ask-typing">Thinking…</span>}
            </div>
          ))
        )}
      </div>
      {messages.length === 0 && (
        <div className="ask-chips">
          {SUGGESTIONS.map((s) => (
            <button key={s} type="button" className="ask-chip" onClick={() => ask(s)} disabled={busy}>
              {s}
            </button>
          ))}
        </div>
      )}
      <form
        className="ask-form"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          className="ask-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. What did he build with LangGraph?"
          maxLength={600}
          aria-label="Your question"
        />
        <button className="btn btn-primary" type="submit" disabled={busy || !input.trim()}>
          {busy ? "…" : "Ask"}
        </button>
      </form>
    </div>
  );
}
