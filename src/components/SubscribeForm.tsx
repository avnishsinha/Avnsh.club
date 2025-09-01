"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("err");
      setMsg("Please enter a valid email.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("ok");
        setMsg("You're on the drop list! Check your inbox soon.");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("err");
        setMsg(data?.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("err");
      setMsg("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl mx-auto flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl px-5 py-3 bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 active:scale-[.98] transition disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Subscribe"}
      </button>
      {msg && (
        <div
          role="status"
          className={`w-full text-sm mt-2 ${
            status === "ok" ? "text-green-600" : "text-red-600"
          }`}
        >
          {msg}
        </div>
      )}
    </form>
  );
}
