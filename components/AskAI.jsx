"use client";

import { useEffect, useRef, useState } from "react";
import { ui } from "../data/i18n";

export default function AskAI({ lang = "en" }) {
  const C = ui[lang].chat;
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
        body: JSON.stringify({ messages: history, lang }),
        signal: controller.signal,
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        setAnswer(data.error || C.error);
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
      if (!answer.trim()) setAnswer(C.empty_answer);
    } catch (err) {
      if (err.name !== "AbortError") setAnswer(C.network);
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
            {C.empty[0]}
            <br />
            {C.empty[1]}
          </p>
        ) : (
          messages.map((m, i) => (
            <div key={i} className={`ask-msg ${m.role === "user" ? "ask-user" : "ask-bot"}`}>
              {m.content || <span className="ask-typing">{C.thinking}</span>}
            </div>
          ))
        )}
      </div>
      {messages.length === 0 && (
        <div className="ask-chips">
          {C.suggestions.map((s) => (
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
          placeholder={C.placeholder}
          maxLength={600}
          aria-label={C.label}
        />
        <button className="btn btn-primary" type="submit" disabled={busy || !input.trim()}>
          {busy ? "…" : C.send}
        </button>
      </form>
    </div>
  );
}
