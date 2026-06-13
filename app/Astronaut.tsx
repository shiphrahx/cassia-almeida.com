"use client";

import { useEffect, useRef, useState } from "react";

const KEYS = ["w", "a", "s", "d"] as const;
type Key = (typeof KEYS)[number];

export default function Astronaut() {
  const spriteRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Record<Key, boolean>>({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  useEffect(() => {
    const sprite = spriteRef.current;
    if (!sprite) return;

    const SIZE = 88;
    const ACCEL = 0.55;
    const FRICTION = 0.92;
    const MAX = 9;

    // rest position: under the subtitle (anchor element in page.tsx)
    const anchor = document.getElementById("astronaut-rest")?.getBoundingClientRect();
    let x = anchor ? anchor.left : window.innerWidth / 2 - SIZE / 2;
    let y = anchor ? anchor.top + 12 : window.innerHeight / 2;
    let vx = 0;
    let vy = 0;

    const held: Record<Key, boolean> = { w: false, a: false, s: false, d: false };
    let facing = 1; // 1 = right, -1 = left

    const isKey = (k: string): k is Key => (KEYS as readonly string[]).includes(k);

    const onDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (!isKey(k)) return;
      e.preventDefault();
      if (!held[k]) {
        held[k] = true;
        setActive((p) => ({ ...p, [k]: true }));
      }
    };
    const onUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (!isKey(k)) return;
      held[k] = false;
      setActive((p) => ({ ...p, [k]: false }));
    };

    let frame = 0;
    const tick = () => {
      if (held.w) vy -= ACCEL;
      if (held.s) vy += ACCEL;
      if (held.a) { vx -= ACCEL; facing = -1; }
      if (held.d) { vx += ACCEL; facing = 1; }

      vx *= FRICTION;
      vy *= FRICTION;
      vx = Math.max(-MAX, Math.min(MAX, vx));
      vy = Math.max(-MAX, Math.min(MAX, vy));

      x += vx;
      y += vy;

      // clamp to viewport
      x = Math.max(0, Math.min(window.innerWidth - SIZE, x));
      y = Math.max(0, Math.min(window.innerHeight - SIZE, y));
      if (x <= 0 || x >= window.innerWidth - SIZE) vx = 0;
      if (y <= 0 || y >= window.innerHeight - SIZE) vy = 0;

      const thrusting = held.w || held.a || held.s || held.d;
      const tilt = vx * 1.5;
      sprite.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt}deg) scaleX(${facing})`;
      sprite.dataset.thrust = thrusting ? "1" : "0";

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={spriteRef} className="astronaut" aria-hidden data-thrust="0">
        <svg viewBox="0 0 64 80" width="88" height="110" fill="none">
          {/* jetpack flame */}
          <g className="astronaut-flame">
            <path
              d="M26 70 Q32 92 38 70 Q35 78 32 80 Q29 78 26 70 Z"
              fill="url(#flame)"
            />
          </g>
          {/* jetpack body */}
          <rect x="18" y="34" width="28" height="26" rx="6" fill="#2a2740" />
          <rect x="20" y="38" width="6" height="14" rx="3" fill="#67e8f9" opacity="0.5" />
          <rect x="38" y="38" width="6" height="14" rx="3" fill="#a78bfa" opacity="0.5" />
          {/* body suit */}
          <rect x="22" y="32" width="20" height="30" rx="9" fill="#e8e6f0" />
          {/* arms */}
          <rect x="14" y="36" width="9" height="20" rx="4.5" fill="#d6d3e3" />
          <rect x="41" y="36" width="9" height="20" rx="4.5" fill="#d6d3e3" />
          {/* legs */}
          <rect x="24" y="58" width="7" height="16" rx="3.5" fill="#d6d3e3" />
          <rect x="33" y="58" width="7" height="16" rx="3.5" fill="#d6d3e3" />
          {/* helmet */}
          <circle cx="32" cy="20" r="16" fill="#f3f1f9" />
          <circle cx="32" cy="20" r="11" fill="#0e0d13" />
          {/* visor shine */}
          <ellipse cx="28" cy="16" rx="4" ry="6" fill="#67e8f9" opacity="0.7" />
          <circle cx="37" cy="24" r="2" fill="#a78bfa" opacity="0.8" />
          <defs>
            <linearGradient id="flame" x1="32" y1="68" x2="32" y2="92" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67e8f9" />
              <stop offset="0.5" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* WASD hint */}
      <div className="wasd-hint" aria-hidden>
        <div className={`wasd-key wasd-w${active.w ? " is-active" : ""}`}>W</div>
        <div className="wasd-row">
          <div className={`wasd-key${active.a ? " is-active" : ""}`}>A</div>
          <div className={`wasd-key${active.s ? " is-active" : ""}`}>S</div>
          <div className={`wasd-key${active.d ? " is-active" : ""}`}>D</div>
        </div>
      </div>
    </>
  );
}
