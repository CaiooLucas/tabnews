"use client";

import { useEffect, useState } from "react";

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePos({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Primary Cursor Spotlight */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(6, 182, 212, 0.24), transparent 70%)`,
        }}
      />

      {/* Secondary Parallax Glow */}
      <div
        className="absolute inset-0 opacity-60 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${(mousePos.x - 50) * 0.2}px, ${(mousePos.y - 50) * 0.2}px)`,
          background: `radial-gradient(900px 700px at ${80 - mousePos.x * 0.2}% ${20 + mousePos.y * 0.2}%, rgba(14, 165, 233, 0.16), transparent 60%)`,
        }}
      />
    </div>
  );
}
