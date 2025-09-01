"use client";

import { useEffect, useMemo, useState } from "react";

function nextMonthMidnight(): Date {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  // first day of next month at 00:00
  return new Date(year, month + 1, 1, 0, 0, 0, 0);
}

function format(deltaMs: number) {
  const total = Math.max(0, Math.floor(deltaMs / 1000));
  const days = Math.floor(total / (60 * 60 * 24));
  const hours = Math.floor((total % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((total % (60 * 60)) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const target = useMemo(() => nextMonthMidnight(), []);
  const [tick, setTick] = useState(() => format(+target - +new Date()));

  useEffect(() => {
    const id = setInterval(() => {
      setTick(format(+target - +new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div
      className="grid grid-cols-4 gap-3 text-center select-none"
      aria-label="Countdown to next drop"
    >
      {[
        ["Days", tick.days],
        ["Hours", tick.hours],
        ["Minutes", tick.minutes],
        ["Seconds", tick.seconds],
      ].map(([label, val]) => (
        <div
          key={label as string}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 p-3 bg-white/70 dark:bg-gray-900/60 backdrop-blur shadow-sm"
        >
          <div className="text-3xl md:text-4xl font-semibold tabular-nums">
            {String(val as number).padStart(2, "0")}
          </div>
          <div className="text-xs opacity-70 mt-1">{label}</div>
        </div>
      ))}
    </div>
  );
}
