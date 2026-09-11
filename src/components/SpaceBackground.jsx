import React, { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // ── STARS ──────────────────────────────────────────────────────────────
    const numStars = 600;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.018 + 0.004,
      drift: (Math.random() - 0.5) * 0.08,
      color:
        Math.random() > 0.85
          ? "#38bdf8"
          : Math.random() > 0.7
          ? "#a78bfa"
          : Math.random() > 0.55
          ? "#fde68a"
          : "#ffffff",
    }));

    // ── SHOOTING STARS ─────────────────────────────────────────────────────
    const shootingStars = [];
    const createShootingStar = () => {
      if (Math.random() < 0.018) {
        shootingStars.push({
          x: Math.random() * width * 0.7,
          y: Math.random() * height * 0.4,
          length: Math.random() * 140 + 60,
          speed: Math.random() * 12 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          opacity: 1,
          width: Math.random() * 1.5 + 0.8,
        });
      }
    };

    // ── PLANETS ────────────────────────────────────────────────────────────
    const planets = [
      // Gas giant with ring (top-right corner)
      {
        x: width * 0.88,
        y: height * 0.15,
        r: 70,
        colors: ["#c084fc", "#7c3aed", "#312e81"],
        hasRing: true,
        ringColor: "rgba(167, 139, 250, 0.35)",
        glow: "#a855f7",
        glowStrength: 0.5,
        drift: { x: 0.008, y: 0.005, phase: 0 },
        stripes: ["rgba(196,181,253,0.25)", "rgba(91,33,182,0.3)"],
      },
      // Lava / orange planet (bottom-left)
      {
        x: width * 0.09,
        y: height * 0.78,
        r: 48,
        colors: ["#fb923c", "#c2410c", "#431407"],
        hasRing: false,
        glow: "#f97316",
        glowStrength: 0.45,
        drift: { x: -0.006, y: 0.007, phase: 1.2 },
        stripes: ["rgba(253,186,116,0.2)", "rgba(154,52,18,0.3)"],
      },
      // Ice blue planet (top-left, distant/small)
      {
        x: width * 0.12,
        y: height * 0.12,
        r: 30,
        colors: ["#67e8f9", "#0e7490", "#083344"],
        hasRing: false,
        glow: "#06b6d4",
        glowStrength: 0.35,
        drift: { x: 0.005, y: -0.004, phase: 2.4 },
        stripes: ["rgba(165,243,252,0.2)", "rgba(14,116,144,0.3)"],
      },
      // Purple moon (bottom-right)
      {
        x: width * 0.82,
        y: height * 0.82,
        r: 22,
        colors: ["#c4b5fd", "#7c3aed", "#3b0764"],
        hasRing: false,
        glow: "#8b5cf6",
        glowStrength: 0.3,
        drift: { x: -0.004, y: -0.005, phase: 3.6 },
        stripes: [],
      },
    ];

    // ── ASTEROID BELT (tiny drifting particles) ────────────────────────────
    const asteroids = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.15 + 0.04,
      angle: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    // ── DRAW PLANET ────────────────────────────────────────────────────────
    const drawPlanet = (p, t) => {
      const driftX = Math.sin(t * 0.0003 + p.drift.phase) * 6;
      const driftY = Math.cos(t * 0.0004 + p.drift.phase) * 4;
      const px = p.x + driftX;
      const py = p.y + driftY;

      // Outer glow
      const glowGrad = ctx.createRadialGradient(px, py, p.r * 0.5, px, py, p.r * 3.5);
      glowGrad.addColorStop(0, p.glow + "66");
      glowGrad.addColorStop(0.4, p.glow + "22");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(px, py, p.r * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Planet sphere
      const grad = ctx.createRadialGradient(px - p.r * 0.3, py - p.r * 0.35, p.r * 0.05, px, py, p.r);
      grad.addColorStop(0, p.colors[0]);
      grad.addColorStop(0.5, p.colors[1]);
      grad.addColorStop(1, p.colors[2]);
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Surface stripes/bands
      if (p.stripes.length > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.clip();
        p.stripes.forEach((color, i) => {
          const bandY = py - p.r * 0.7 + i * p.r * 0.8;
          ctx.fillStyle = color;
          ctx.fillRect(px - p.r, bandY, p.r * 2, p.r * 0.35);
        });
        ctx.restore();
      }

      // Specular highlight
      const hilite = ctx.createRadialGradient(px - p.r * 0.38, py - p.r * 0.38, 0, px - p.r * 0.2, py - p.r * 0.25, p.r * 0.65);
      hilite.addColorStop(0, "rgba(255,255,255,0.35)");
      hilite.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fillStyle = hilite;
      ctx.fill();

      // Ring system
      if (p.hasRing) {
        ctx.save();
        ctx.translate(px, py);
        ctx.scale(1, 0.28);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r * 2.0, p.r * 2.0, 0, 0, Math.PI * 2);
        ctx.strokeStyle = p.ringColor;
        ctx.lineWidth = p.r * 0.32;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(0, 0, p.r * 2.5, p.r * 2.5, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(167,139,250,0.15)";
        ctx.lineWidth = p.r * 0.18;
        ctx.stroke();
        ctx.restore();

        // redraw planet over ring front
        const grad2 = ctx.createRadialGradient(px - p.r * 0.3, py - p.r * 0.35, p.r * 0.05, px, py, p.r);
        grad2.addColorStop(0, p.colors[0]);
        grad2.addColorStop(0.5, p.colors[1]);
        grad2.addColorStop(1, p.colors[2]);
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = grad2;
        ctx.fill();
      }
    };

    // ── RENDER LOOP ────────────────────────────────────────────────────────
    const render = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // Deep space gradient base
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "#030712");
      bg.addColorStop(0.5, "#050d1f");
      bg.addColorStop(1, "#030712");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Nebula clouds
      const nebulae = [
        { cx: width * 0.2, cy: height * 0.3, r: 480, c0: "rgba(99,102,241,0.07)", c1: "transparent" },
        { cx: width * 0.8, cy: height * 0.65, r: 550, c0: "rgba(6,182,212,0.055)", c1: "transparent" },
        { cx: width * 0.5, cy: height * 0.8, r: 400, c0: "rgba(139,92,246,0.07)", c1: "transparent" },
        { cx: width * 0.65, cy: height * 0.2, r: 350, c0: "rgba(244,63,94,0.04)", c1: "transparent" },
      ];
      nebulae.forEach((n) => {
        const g = ctx.createRadialGradient(n.cx, n.cy, 0, n.cx, n.cy, n.r);
        g.addColorStop(0, n.c0);
        g.addColorStop(1, n.c1);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      });

      // Stars
      stars.forEach((s) => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0.15) s.speed = -s.speed;
        s.x += s.drift;
        if (s.x > width) s.x = 0;
        if (s.x < 0) s.x = width;

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        if (s.radius > 1.3) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = s.color;
        }
        ctx.fill();
        ctx.restore();
      });

      // Asteroids
      asteroids.forEach((a) => {
        a.x += Math.cos(a.angle) * a.speed;
        a.y += Math.sin(a.angle) * a.speed;
        if (a.x < 0) a.x = width;
        if (a.x > width) a.x = 0;
        if (a.y < 0) a.y = height;
        if (a.y > height) a.y = 0;

        ctx.save();
        ctx.globalAlpha = a.alpha;
        ctx.fillStyle = "#94a3b8";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Planets
      planets.forEach((p) => drawPlanet(p, time));

      // Shooting stars
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        ctx.save();
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.length,
          s.y - Math.sin(s.angle) * s.length
        );
        grad.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
        grad.addColorStop(0.4, `rgba(180,220,255,${s.opacity * 0.5})`);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.lineCap = "round";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(200,230,255,0.8)";
        ctx.stroke();
        ctx.restore();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.012;

        if (s.opacity <= 0) shootingStars.splice(i, 1);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
