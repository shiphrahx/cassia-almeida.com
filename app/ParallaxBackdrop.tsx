"use client";

import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; vx: number; vy: number };

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
    let dots: Dot[] = [];
    const mouse = { x: -9999, y: -9999 };
    const linkDist = 130;
    const mouseDist = 180;

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(160, Math.floor((w * h) / 9000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        // gentle cursor attraction — the playful tug
        const mdx = mouse.x - d.x;
        const mdy = mouse.y - d.y;
        const md = Math.hypot(mdx, mdy);
        if (md < mouseDist && md > 0) {
          const pull = (1 - md / mouseDist) * 0.4;
          d.x += (mdx / md) * pull;
          d.y += (mdy / md) * pull;
        }
      }

      // links between near dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const a = (1 - dist / linkDist) * 0.16;
            ctx.strokeStyle = `rgba(167,139,250,${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // dots — brighten near cursor
      for (const d of dots) {
        const md = Math.hypot(mouse.x - d.x, mouse.y - d.y);
        const near = md < mouseDist ? 1 - md / mouseDist : 0;
        const r = 1.1 + near * 1.4;
        ctx.fillStyle = `rgba(${near > 0 ? "120,225,245" : "150,140,180"},${0.32 + near * 0.5})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
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
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    build();
    if (reduced) {
      draw(); // static frame, no motion
    } else {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
      loop();
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="parallax-backdrop" aria-hidden />;
}
