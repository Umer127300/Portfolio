import React from "react";
import "./background2.css";

const colors = [
  "#60A5FA", // Blue
  "#A78BFA", // Purple
  "#F472B6", // Pink
  "#22D3EE", // Cyan
  "#FDBA74", // Orange
  "#C084FC", // Violet
];

// Small Moving Bubbles
const bubbles = Array.from({ length: 80 }).map((_, i) => ({
  id: i,
  size: Math.random() * 6 + 3, // 3px - 9px
  left: Math.random() * 100,
  top: Math.random() * 100,
  color: colors[Math.floor(Math.random() * colors.length)],
  duration: Math.random() * 8 + 8, // 8s - 16s
  delay: Math.random() * 8,
}));

// Tiny Particles
const particles = Array.from({ length: 100 }).map((_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  top: Math.random() * 100,
  color: colors[Math.floor(Math.random() * colors.length)],
}));

const Background = () => {
  return (
    <div className="background">

      {/* Ripple */}
      <div className="ripple"></div>

      {/* Tiny Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.color,
          }}
        />
      ))}

      {/* Small Moving Bubbles */}
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            top: `${b.top}%`,
            background: b.color,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
          }}
        />
      ))}

    </div>
  );
};

export default Background;