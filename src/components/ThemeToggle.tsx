"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Read initial theme on mount (mirrors the inline script)
  useEffect(() => {
    const ls = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = (ls as Theme) || (systemDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  // Apply to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      className="rounded-xl px-3 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 hover:scale-105 transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}
