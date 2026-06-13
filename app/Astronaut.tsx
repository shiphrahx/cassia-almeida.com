"use client";

import { useEffect, useRef, useState } from "react";

const KEYS = ["w", "a", "s", "d"] as const;
type Key = (typeof KEYS)[number];

const W = 72; // sprite width  (px)
const H = 90; // sprite height (px)

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

    const ACCEL = 0.5;
    const FRICTION = 0.9;
    const MAX = 8;

    // rest position: under the subtitle (anchor element in page.tsx)
    const anchor = document.getElementById("astronaut-rest")?.getBoundingClientRect();
    let x = anchor ? anchor.left : window.innerWidth / 2 - W / 2;
    let y = anchor ? anchor.bottom + 8 : window.innerHeight / 2;
    let vx = 0;
    let vy = 0;
    let facing = 1;
    let bobT = 0;

    const held: Record<Key, boolean> = { w: false, a: false, s: false, d: false };
    const isKey = (k: string): k is Key => (KEYS as readonly string[]).includes(k);

    const onDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (!isKey(k)) return;
      e.preventDefault();
      if (held[k]) return; // ignore auto-repeat
      held[k] = true;
      setActive((p) => ({ ...p, [k]: true }));
    };
    const onUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (!isKey(k)) return;
      held[k] = false;
      setActive((p) => ({ ...p, [k]: false }));
    };

    let frame = 0;
    const render = () => {
      const maxX = window.innerWidth - W;
      const maxY = window.innerHeight - H;

      if (held.w) vy -= ACCEL;
      if (held.s) vy += ACCEL;
      if (held.a) { vx -= ACCEL; facing = -1; }
      if (held.d) { vx += ACCEL; facing = 1; }

      vx = Math.max(-MAX, Math.min(MAX, vx * FRICTION));
      vy = Math.max(-MAX, Math.min(MAX, vy * FRICTION));

      x += vx;
      y += vy;

      // clamp inside viewport, kill velocity at wall
      if (x < 0) { x = 0; vx = 0; }
      else if (x > maxX) { x = maxX; vx = 0; }
      if (y < 0) { y = 0; vy = 0; }
      else if (y > maxY) { y = maxY; vy = 0; }

      const thrusting = held.w || held.s || held.a || held.d;

      // idle bob handled here (not CSS) so it never fights this transform
      bobT += 0.04;
      const bob = thrusting ? 0 : Math.sin(bobT) * 4;
      const tilt = vx * 1.4;

      sprite.style.transform = `translate3d(${x}px, ${y + bob}px, 0) rotate(${tilt}deg)`;
      sprite.style.setProperty("--face", String(facing));
      sprite.dataset.thrust = thrusting ? "1" : "0";

      frame = requestAnimationFrame(render);
    };

    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={spriteRef} className="astronaut" aria-hidden data-thrust="0">
        {/* inner element carries the facing flip so it never affects clamping */}
        <div className="astronaut-inner">
          <svg viewBox="0 0 64 80" width={W} height={H} fill="none">
            <g className="astronaut-flame">
              <path d="M26 70 Q32 92 38 70 Q35 78 32 80 Q29 78 26 70 Z" fill="url(#flame)" />
            </g>
            <rect x="18" y="34" width="28" height="26" rx="6" fill="#2a2740" />
            <rect x="20" y="38" width="6" height="14" rx="3" fill="#67e8f9" opacity="0.5" />
            <rect x="38" y="38" width="6" height="14" rx="3" fill="#a78bfa" opacity="0.5" />
            <rect x="22" y="32" width="20" height="30" rx="9" fill="#e8e6f0" />
            <rect x="14" y="36" width="9" height="20" rx="4.5" fill="#d6d3e3" />
            <rect x="41" y="36" width="9" height="20" rx="4.5" fill="#d6d3e3" />
            <rect x="24" y="58" width="7" height="16" rx="3.5" fill="#d6d3e3" />
            <rect x="33" y="58" width="7" height="16" rx="3.5" fill="#d6d3e3" />
            <circle cx="32" cy="20" r="16" fill="#f3f1f9" />
            <circle cx="32" cy="20" r="11" fill="#0e0d13" />
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
      </div>

      {/* keyboard-key hint, bottom centered */}
      <div className="wasd-hint" aria-hidden>
        <div className="wasd-row">
          <kbd className={`key${active.w ? " is-active" : ""}`}>W</kbd>
        </div>
        <div className="wasd-row">
          <kbd className={`key${active.a ? " is-active" : ""}`}>A</kbd>
          <kbd className={`key${active.s ? " is-active" : ""}`}>S</kbd>
          <kbd className={`key${active.d ? " is-active" : ""}`}>D</kbd>
        </div>
      </div>
    </>
  );
}
