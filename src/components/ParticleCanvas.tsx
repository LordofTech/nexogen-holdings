"use client";

import { useEffect, useRef } from "react";

interface ParticleCanvasProps {
  className?: string;
  particleCount?: number;
  variant?: "hero" | "vortex" | "cascade" | "ambient";
  color?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export function ParticleCanvas({
  className = "",
  particleCount = 80,
  variant = "ambient",
  color = "#00FFFF",
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    const w = () => canvas.getBoundingClientRect().width;
    const h = () => canvas.getBoundingClientRect().height;

    const createParticle = (): Particle => {
      const width = w();
      const height = h();
      const centerX = width / 2;
      const centerY = height / 2;

      if (variant === "hero") {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 40 + 20;
        return {
          x: centerX + Math.cos(angle) * dist,
          y: centerY + Math.sin(angle) * dist,
          vx: Math.cos(angle) * (2 + Math.random() * 4),
          vy: Math.sin(angle) * (0.5 + Math.random() * 1.5),
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.8 + 0.2,
          life: 0,
          maxLife: 100 + Math.random() * 100,
        };
      }

      if (variant === "vortex") {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * Math.min(width, height) * 0.35;
        return {
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          vx: -Math.sin(angle) * 1.5,
          vy: Math.cos(angle) * 1.5,
          size: Math.random() * 2.5 + 0.5,
          alpha: Math.random() * 0.7 + 0.3,
          life: 0,
          maxLife: 200 + Math.random() * 150,
        };
      }

      if (variant === "cascade") {
        return {
          x: Math.random() * width,
          y: -10,
          vx: (Math.random() - 0.5) * 0.5,
          vy: 1 + Math.random() * 2,
          size: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.6 + 0.2,
          life: 0,
          maxLife: 150 + Math.random() * 100,
        };
      }

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        life: 0,
        maxLife: 300,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const draw = () => {
      const width = w();
      const height = h();
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      if (variant === "hero") {
        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          Math.min(width, height) * 0.4
        );
        gradient.addColorStop(0, "rgba(0, 255, 255, 0.15)");
        gradient.addColorStop(0.5, "rgba(0, 191, 255, 0.05)");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      particles.forEach((p, i) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        if (variant === "vortex") {
          const dx = p.x - centerX;
          const dy = p.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          p.vx += (-dy / dist) * 0.02;
          p.vy += (dx / dist) * 0.02;
        }

        const fadeAlpha = 1 - p.life / p.maxLife;
        const currentAlpha = p.alpha * fadeAlpha;

        if (p.life >= p.maxLife || p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) {
          particles[i] = createParticle();
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(")", `, ${currentAlpha})`).replace("rgb", "rgba").replace("#", "");
        
        const hex = color.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${currentAlpha})`;
        ctx.fill();

        if (variant === "hero" || variant === "vortex") {
          const nextP = particles[(i + 1) % particles.length];
          const dist = Math.hypot(p.x - nextP.x, p.y - nextP.y);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextP.x, nextP.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${currentAlpha * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [particleCount, variant, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
