import { useEffect, useState } from "react";

const pulseKeyframes = `
  @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes spin-rev  { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes ping-slow { 0%, 100% { transform: scale(1);   opacity: 0.6; }
                         50%       { transform: scale(1.15); opacity: 1;   } }
  @keyframes dash {
    0%   { stroke-dashoffset: 220; }
    50%  { stroke-dashoffset: 40;  }
    100% { stroke-dashoffset: 220; }
  }
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.25; }
    50%       { opacity: 0.6;  }
  }
  @keyframes fade-dots {
    0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
    40%           { opacity: 1;   transform: scale(1);   }
  }
  @keyframes text-flicker {
    0%, 100% { opacity: 0.7; }
    50%       { opacity: 1;   }
  }
`;

export default function Loader({ message = "Authenticating" }) {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d + 1) % 3), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{pulseKeyframes}</style>

      {/* Full-screen backdrop — matches login page background */}
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #0a1628 0%, #050d18 100%)" }}
      >
        {/* Card — matches the login card */}
        <div
          className="flex flex-col items-center gap-8 rounded-2xl px-14 py-12"
          style={{ background: "#0e1928", border: "1px solid rgba(0,188,212,0.12)" }}
        >
          {/* ── RING ASSEMBLY ── */}
          <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>

            {/* Ambient glow beneath rings */}
            <div
              className="absolute rounded-full"
              style={{
                width: 80, height: 80,
                background: "radial-gradient(circle, rgba(0,188,212,0.18) 0%, transparent 70%)",
                animation: "glow-pulse 2s ease-in-out infinite",
              }}
            />

            {/* Outer ring — slow CW */}
            <svg
              className="absolute"
              width="120" height="120"
              style={{ animation: "spin-slow 3s linear infinite" }}
              viewBox="0 0 120 120"
            >
              <circle
                cx="60" cy="60" r="54"
                fill="none"
                stroke="rgba(0,188,212,0.12)"
                strokeWidth="2"
              />
              <circle
                cx="60" cy="60" r="54"
                fill="none"
                stroke="#00bcd4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="220 120"
                style={{ animation: "dash 2.4s ease-in-out infinite" }}
              />
            </svg>

            {/* Middle ring — CCW */}
            <svg
              className="absolute"
              width="88" height="88"
              style={{ animation: "spin-rev 2s linear infinite" }}
              viewBox="0 0 88 88"
            >
              <circle
                cx="44" cy="44" r="38"
                fill="none"
                stroke="rgba(0,188,212,0.08)"
                strokeWidth="1.5"
              />
              <circle
                cx="44" cy="44" r="38"
                fill="none"
                stroke="rgba(0,188,212,0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="80 160"
                style={{ animation: "dash 1.8s ease-in-out infinite reverse" }}
              />
            </svg>

            {/* Inner ring — CW, faster */}
            <svg
              className="absolute"
              width="58" height="58"
              style={{ animation: "spin-slow 1.4s linear infinite" }}
              viewBox="0 0 58 58"
            >
              <circle
                cx="29" cy="29" r="23"
                fill="none"
                stroke="rgba(0,188,212,0.06)"
                strokeWidth="1"
              />
              <circle
                cx="29" cy="29" r="23"
                fill="none"
                stroke="rgba(0,188,212,0.5)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="36 108"
              />
            </svg>

            {/* Centre dot */}
            <div
              className="rounded-full"
              style={{
                width: 10, height: 10,
                background: "#00bcd4",
                boxShadow: "0 0 8px 2px rgba(0,188,212,0.5)",
                animation: "ping-slow 1.8s ease-in-out infinite",
              }}
            />
          </div>

          {/* ── LABEL ── */}
          <div className="flex flex-col items-center gap-3">
            <p
              className="tracking-widest uppercase text-xs font-medium"
              style={{
                color: "#00bcd4",
                fontFamily: "'Rajdhani', 'Orbitron', monospace",
                animation: "text-flicker 2s ease-in-out infinite",
                letterSpacing: "0.2em",
              }}
            >
              {message}
            </p>

            {/* Animated dot-bar progress */}
            <div className="flex gap-1.5 items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 5, height: 5,
                    background: i <= dots + 1 ? "#00bcd4" : "rgba(0,188,212,0.2)",
                    animation: `fade-dots 1.2s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Horizontal scan line ── */}
          <div
            className="rounded-full"
            style={{
              width: 140, height: 1,
              background: "linear-gradient(90deg, transparent, rgba(0,188,212,0.4), transparent)",
              animation: "glow-pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </>
  );
}