"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number; // radius
  base: number; // base brightness 0..1
  depth: number; // 0 (far) .. 1 (near) — parallax + size
  tw: number; // twinkle phase
  twSpeed: number; // twinkle speed
  hue: 0 | 1 | 2; // 0 white, 1 violet-ish, 2 cyan-ish
};

const COLORS: Record<0 | 1 | 2, [number, number, number]> = {
  0: [235, 233, 245], // near-white
  1: [191, 173, 255], // soft violet
  2: [150, 225, 245], // soft cyan
};

export default function ParallaxBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let stars: Star[] = [];
    const parallax = { x: 0, y: 0, tx: 0, ty: 0 };

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // dense: ~1 star per 1600px², capped
      const count = Math.min(900, Math.floor((w * h) / 1600));
      stars = Array.from({ length: count }, () => {
        const depth = Math.random();
        // most stars very dim; a rare few brighter
        const bright = Math.random();
        const base = bright > 0.96 ? 0.5 + Math.random() * 0.3 : 0.08 + bright * 0.22;
        const r = 0.4 + Math.random() * 0.6 * depth;
        const hueRoll = Math.random();
        const hue: 0 | 1 | 2 = hueRoll > 0.88 ? 2 : hueRoll > 0.76 ? 1 : 0;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          base,
          depth,
          tw: Math.random() * Math.PI * 2,
          twSpeed: 0.004 + Math.random() * 0.012,
          hue,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // ease parallax toward target
      parallax.x += (parallax.tx - parallax.x) * 0.05;
      parallax.y += (parallax.ty - parallax.y) * 0.05;

      for (const s of stars) {
        s.tw += s.twSpeed;
        // twinkle: brighter stars twinkle less
        const flicker = 1 - (1 - s.base) * 0.5 * (0.5 + 0.5 * Math.sin(s.tw));
        const alpha = Math.min(1, s.base * flicker);

        // parallax: nearer stars shift more
        const px = s.x + parallax.x * (s.depth * 18);
        const py = s.y + parallax.y * (s.depth * 18);

        const [cr, cg, cb] = COLORS[s.hue];

        // faint glow only for the rare brightest
        if (s.base > 0.65) {
          const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 3);
          g.addColorStop(0, `rgba(${cr},${cg},${cb},${alpha * 0.3})`);
          g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px, py, s.r * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let frame = 0;
    const loop = () => {
      draw();
      frame = requestAnimationFrame(loop);
    };

    const onResize = () => build();
    const onMove = (e: MouseEvent) => {
      parallax.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      parallax.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    build();
    if (reduced) {
      draw(); // static starfield, no twinkle/parallax
    } else {
      window.addEventListener("mousemove", onMove);
      loop();
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="parallax-backdrop" aria-hidden />;
}
