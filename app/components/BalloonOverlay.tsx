"use client";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

export default function KonamiOverlay() {
  const [balloons, setBalloons] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const audio = new Audio("/sfx/audio.mp3");
    audio.volume = 0.7;
    audio.play().catch((err) => {
      console.error("Sound failed to play:", err);
    });

    const count = 25;
    setBalloons(Array.from({ length: count }, (_, i) => i));

    const timeout = setTimeout(() => {
      setBalloons([]);
      setShowConfetti(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Balloons */}
      {balloons.map((id) => (
        <div
          key={id}
          className="balloon"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            backgroundColor: randomColor(),
          }}
        />
      ))}

      {/* Confetti burst center screen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Confetti active={showConfetti} />
      </div>

      {/* Banner */}
      <div className="absolute top-10 w-full flex justify-center">
        <div className="bg-white/90 dark:bg-muted px-6 py-3 rounded-xl shadow-lg text-center text-black dark:text-white font-bold text-xl backdrop-blur-md animate-fade-in">
          🎉 Congratulations. You’ve unlocked nothing.
        </div>
      </div>
    </div>
  );
}

function randomColor() {
  const colors = ["#f87171", "#60a5fa", "#facc15", "#34d399", "#a78bfa"];
  return colors[Math.floor(Math.random() * colors.length)];
}
